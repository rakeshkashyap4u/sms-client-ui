import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SmsConfigService } from '../services/sms-config-service';
import { map, Observable } from 'rxjs';

interface Circle {
  name: string;
  detail: string;
  status: string;
}

@Component({
  selector: 'app-connection-status',
  standalone: true, // ✅ mark as standalone
  imports: [CommonModule], // ✅ only modules here
  templateUrl: './connection-status.html',
  styleUrls: ['./connection-status.css'] // ✅ plural
})
export class ConnectionStatus {


  circles$: Observable<Circle[]>; // ✅ observable for async pipe

  constructor(private smsConfigService: SmsConfigService) {
    // transform API response into an array of Circle objects
    this.circles$ = this.smsConfigService.getConnections().pipe(
      map((data: { circles: any; }) => Array.isArray(data.circles) ? data.circles : [data.circles])
    );
  }

  loading = true;
circles: Circle[] = [];

ngOnInit() {




}
}