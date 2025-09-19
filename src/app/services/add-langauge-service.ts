import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language, Languages } from '../language/language';

@Injectable({
  providedIn: 'root'
})
export class AddLangaugeService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addLanguage(payload: any): Observable<string> {
    // Spring endpoint expects JSON matching LanguageSpecification
    return this.http.post(this.apiUrl + '/addLanguage', payload, { responseType: 'text' });
  }


  getLanguages(): Observable<Languages[]> {
    return this.http.get<Languages[]>(`${this.apiUrl}/languages`);
  }

}
