import { Component } from '@angular/core';
import { Observable, map, combineLatest, startWith } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ApiService]
})

export class ProductsComponent {

  products: Observable<Product[]>;
  editors: Observable<string[]>;

  searchForm = this.formBuilder.group({
    searchQuery: [''],
    editor: [''],
  });

  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.products = this.getProducts();
    this.editors = this.getEditors();
  }

  private getProducts(): Observable<Product[]> {
    const products = this.api.getProducts();
    const search = this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value), map(({ searchQuery, editor }) => ({ searchQuery: (searchQuery ?? '').toLowerCase(), editor }))
    );

    return combineLatest([products, search]).pipe(
      map(([products, { searchQuery, editor }]) =>
        products.filter((product) => {
          const searchQueryMatch = product.title.toLowerCase().includes(searchQuery) || product.artist.toLowerCase().includes(searchQuery) || product.editor.toLowerCase().includes(searchQuery);

          const editorMatch = !editor || product.editor.toLowerCase() === editor.toLowerCase();

          return searchQueryMatch && editorMatch;
        })
      )
    );
  }

  private getEditors(): Observable<string[]> {
    return this.api.getEditors();
  }
}