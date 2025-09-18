import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMOs();
  }

  getMOs(): void {
    this.http.get<any>('../getMOsAsJson').subscribe({
      next: (resp) => {
        this.mos = resp.mos || [];
      },
      error: (err) => console.error('Error fetching MOs:', err)
    });
  }

  selectMO(mo: MO): void {
    this.selectedMO = mo;
  }

  addNewMO(): void {
    this.http.post('/SMSClient/addMO', this.newMO).subscribe({
      next: () => {
        this.getMOs();
        this.newMO = { action: '', shcode: '', keyword: '', type: 'GET' };
      },
      error: (err) => console.error('Error adding MO:', err)
    });
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
