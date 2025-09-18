import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Circle {
  name: string;
  detail: string;
  status: string;
}

@Component({
  selector: 'app-connection-status',
  standalone: true, // ✅ mark as standalone
  imports: [CommonModule, HttpClientModule], // ✅ only modules here
  templateUrl: './connection-status.html',
  styleUrls: ['./connection-status.css'] // ✅ plural
})
export class ConnectionStatus {
  circles: Circle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getConnections();
  }

  getConnections(): void {
    this.http.get<any>('../getConnectionsAsJson').subscribe({
      next: (resp) => {
        this.circles = resp.circles || [];
      },
      error: (err) => {
        console.error('Error fetching connections:', err);
      }
    });
  }
}
