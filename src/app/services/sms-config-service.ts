import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsConfigService {

  private apiUrl1 = 'http://localhost:8080/getConnectionsAsJson'; // adjust backend port

  constructor(private http: HttpClient) {}

  getConnections(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }
}