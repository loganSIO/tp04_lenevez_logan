import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './user';
import { AppFieldMatchGroupDirective } from './field-match-group.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, AppFieldMatchGroupDirective],
  templateUrl: './form.component.html',
})

export class FormComponent {
  civilities = {
    '': 'Civility...',
    'Mr': 'Mr',
    'M': 'Miss',
  }

  countries = {
    '': 'Country...',
    'F': 'France',
    'L': 'Luxembourg',
    'B': 'Belgium',
    'S': 'Switzerland',
  }


  @Input() model = new User();
  @Output() submit = new EventEmitter<User>();

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    this.router.navigateByUrl('/data-form', { state: this.model });
  }
}