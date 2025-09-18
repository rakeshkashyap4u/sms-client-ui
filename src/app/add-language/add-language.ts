import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  MatCardModule
} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Language {
  language: string;
  dataCoding: string;
  serviceType: string;
  encoding: string;
  script: string;
}

@Component({
  selector: 'app-add-language',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-language.html',
  styleUrl: './add-language.css'
})
export class AddLanguage   {


  languageForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.languageForm = this.fb.group({
      language: ['', [Validators.required, Validators.pattern('[_A-Z]{1,2}')]],
      dataCoding: ['8', [Validators.required, Validators.pattern('[0-9]{1}')]],
      serviceType: ['', Validators.required],
      encoding: ['true', Validators.required],
      script: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.languageForm.valid) {
      console.log('Form Data:', this.languageForm.value);
      // ✅ Replace with service call to save language
      alert('Language Added Successfully!');
      this.router.navigate(['/languages']); // redirect to list page
    }
  }

}