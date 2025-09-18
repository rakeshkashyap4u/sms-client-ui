import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


interface Promotion {
  name: string;
  start: string;
  count: number;
  pid: string;
  paused: string;
}

@Component({
  selector: 'app-show-active-promotions',
  imports: [CommonModule],
  templateUrl: './show-active-promotions.html',
  styleUrl: './show-active-promotions.css'
})
export class ShowActivePromotions {


  promotions: Promotion[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getActivePromotions();
  }

  getActivePromotions(): void {
    this.http.get<any>('../showPromotions').subscribe({
      next: (resp) => {
        this.promotions = resp.promotions || [];
      },
      error: (err) => {
        console.error('Error fetching promotions:', err);
      }
    });
  }

  toggleAction(promotion: Promotion): string {
    return promotion.paused === 'false' ? 'Pause' : 'Resume';
  }
}
