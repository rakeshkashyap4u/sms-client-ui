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

  selectedFile: File | undefined;

  selectedFiles: File[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlertService();
  }

  getAlertService(): void {
    this.http.get<any>('http://localhost:8080/getAlertsWithContents').subscribe({
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('alertcontent[]', this.selectedFile);

    this.http.post('http://localhost:8080/uploadAlertContent', formData, { responseType: 'text' })
      .subscribe({
        next: (status) => {
          console.log('Server response:', status);
          alert(status); // optional user feedback
        },
        error: (err) => console.error('Upload failed', err)
      });
  }
}
