import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Product } from './models/products';
import { env } from './env/env';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(env.backendProducts);
  }

  getEditors(): Observable<string[]> {
    return this.http.get<string[]>(env.backendEditors);
  }
}