import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';


interface MOAction {
  aid: string;
  type: string;
  details: string;
}

interface MO {
  moId: string;
  servicecode: string;
  keyword: string;
  actions: MOAction[];
}

@Component({
  selector: 'app-mo-configuration',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './mo-configuration.html',
  styleUrl: './mo-configuration.css'
})
export class MoConfiguration  implements OnInit {
  mos: MO[] = [];
  selectedMO: MO | null = null;

  newMO = {
    action: '',
    shcode: '',
    keyword: '',
    type: 'GET'
  };

  newAction = {
    action: '',
    moid: '',
    type: 'GET'
  };
  mos$: Observable<any[]> | undefined;

  constructor(private http: HttpClient) {}



  ngOnInit() {
    this.getMOs();

  }

  getMOs() {
    console.log("getMOs");

    // Transform API response into an array
    this.mos$ = this.http.get<{ mos: any | any[] }>('http://localhost:8080/getMOsAsJson').pipe(
      map((resp: { mos: any; }) => Array.isArray(resp.mos) ? resp.mos : [resp.mos])
    );
  }

  selectMO(mo: MO): void {
    this.selectedMO = mo;
  }

  addNewMO(): void {
    // Build query parameters from your form data
    const params = new URLSearchParams({
      action: this.newMO.action,
      shcode: this.newMO.shcode,
      keyword: this.newMO.keyword,
      type: this.newMO.type
    }).toString();

    // Make POST request with parameters in URL
    this.http.post(`http://localhost:8080/addMO?${params}`, {}).subscribe({
      next: () => {
        this.getMOs(); // refresh MO list
        // Reset form
        this.newMO = { action: '', shcode: '', keyword: '', type: 'GET' };

      },
      error: (err) => console.error('Error adding MO:', err)
    });
    window.location.reload();
  }


  addNewMOAction(): void {
    if (!this.selectedMO) return;

    const payload = {
      ...this.newAction,
      moid: this.selectedMO.moId
    };

    this.http.post('/SMSClient/addMOAction', payload).subscribe({
      next: () => {
        this.getMOs();
        this.newAction = { action: '', moid: '', type: 'GET' };
      },
      error: (err) => console.error('Error adding action:', err)
    });
  }
}
