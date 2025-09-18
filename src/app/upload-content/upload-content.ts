import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Alert {
  serviceid: string;
  subserviceid: string;
}

@Component({
  selector: 'app-upload-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-content.html',
  styleUrls: ['./upload-content.css']
})
export class UploadContent implements OnInit {
  alerts: Alert[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlertService();
  }

  getAlertService(): void {
    this.http.get<any>('../getAlertsWithContents').subscribe({
      next: (resp) => {
        this.alerts = resp.alerts || [];
      },
      error: (err) => {
        console.error('Error fetching alerts:', err);
      }
    });
  }

  deleteSelectedServices(form: HTMLFormElement): void {
    form.submit(); // keep old backend handling
  }
}
