import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-management',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      ccv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      expiration: this.formBuilder.group({
        month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
        year: ['', [Validators.required, Validators.min(new Date().getFullYear()), Validators.max(9999)]]
      })
    });
  }

  // Getter for easy access to form fields
  get f() { return this.cardForm.controls; }

  onSubmit() {
    // Check form validity
    if (this.cardForm.invalid) {
      return;
    }

    // Retrieve form data
    const formData = this.cardForm.value;
    console.log(formData);

    // Send data to backend or perform other actions
  }
}
