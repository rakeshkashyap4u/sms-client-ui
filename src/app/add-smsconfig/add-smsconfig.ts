import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-smsconfig',
  imports: [

    FormsModule,          // For ngModel (optional)
    ReactiveFormsModule   // ✅ Needed for [formGroup], formControlName
  ],
  templateUrl: './add-smsconfig.html',
  styleUrl: './add-smsconfig.css'
})
export class AddSMSConfig {
  smscForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.smscForm = this.fb.group({
      opId: ['', Validators.required],
      circle: ['', Validators.required],
      serverIp: ['', Validators.required],
      serverPort: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      serviceUri: ['', Validators.required],
      userid: ['', Validators.required],
      password: ['', Validators.required],
      bindMode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.smscForm.valid) {
      console.log('Form submitted:', this.smscForm.value);
      // TODO: call backend API here with HttpClient
    } else {
      this.smscForm.markAllAsTouched();
    }
  }
}