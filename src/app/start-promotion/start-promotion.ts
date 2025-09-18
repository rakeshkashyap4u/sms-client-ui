import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Circle {
  name: string;
}

@Component({
  selector: 'app-start-promotion',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './start-promotion.html',
  styleUrl: './start-promotion.css'
})
export class StartPromotion   implements OnInit {
  circles: Circle[] = [];
  formData: any = {
    message: '',
    pname: '',
    cli: '',
    validation: 'true',
    circle: '',
    startDate: '',
    startTime: '',
    expiryDate: '',
    expiryTime: '',
    serviceid: '',
    language: '',
    smsFlag: false,
    protocol: '0',
    baseType: 'upload',
    inputMsisdn: '',
    baseFile: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCircles();
  }

  getCircles(): void {
    this.http.get<any>('/fetchCirclesAsJson').subscribe({
      next: (resp) => {
        this.circles = resp.circles || [];
      },
      error: (err) => {
        console.error('Error fetching circles:', err);
      }
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && !file.name.endsWith('.csv')) {
      alert('Please upload your base as a *.csv file.');
      this.formData.baseFile = null;
      event.target.value = '';
    } else {
      this.formData.baseFile = file;
    }
  }

  toggleBase(type: string): void {
    this.formData.baseType = type;
  }

  submitForm(): void {
    console.log('Submitting form:', this.formData);
    // 👉 replace with POST to your backend
    // const formDataObj = new FormData();
    // for (let key in this.formData) formDataObj.append(key, this.formData[key]);
    // this.http.post('/SMSClient/promote/', formDataObj).subscribe(...)
  }
}