import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddLangaugeService } from '../services/add-langauge-service';

@Component({
  selector: 'app-add-language',
  standalone: true,                          // <-- important if you use `imports`
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
  styleUrls: ['./add-language.css']
})
export class AddLanguageComponent {

  languageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private languageService: AddLangaugeService
  ) {
    this.languageForm = this.fb.group({
      language: ['', Validators.required],
      dataCoding: ['8', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
      serviceType: ['', Validators.required],
      encoding: [true, Validators.required],
      script: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.languageForm.valid) return;

    const fv = this.languageForm.value;

    // Build payload matching your Spring DTO fields exactly:
    const payload = {
      language: fv.language,
      dataCodingValue: Number(fv.dataCoding),   // backend expects dataCodingValue
      serviceType: fv.serviceType,
      encoding: fv.encoding === true, // ensure boolean
      script: Number(fv.script)
    };

    this.languageService.addLanguage(payload).subscribe({
      next: () => {
        alert('Language Added Successfully!');
        this.router.navigate(['/languages']);
      },
      error: (err) => {
        console.error('Error adding language', err);
        alert('Failed to add language! Check console/network and backend logs.');
      }
    });
  }
}
