import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  menuItems = [
    { label: 'SMPP Negative Response Codes', route: '/negative-response-codes', icon: '⚠️', title: 'Click here to check Negative Response Codes Meaning' },
    { label: 'Check SMSC Connections', route: '/connectionStatus', icon: '🔌', title: 'Click here to check smsc bind status' },
    { label: 'Configure MO Messages', route: '/moconfigurations', icon: '✉️', title: 'Click here to view/add MOs' },
    { label: 'Upload Alerts Content', route: '/uploadContent', icon: '📤', title: 'Click here to upload SMS content for NAMAZ and LEARN-ENGLISH' },
    { label: 'View Active Promotions', route: '/showActivePromotions', icon: '📈', title: 'Click here to View or Stop Running Promotions' },
    { label: 'Start Promotions', route: '/startPromotion', icon: '🚀', title: 'Click here to start new Promotion' },
   // { label: 'Edit Encodings', route: '/encoding', icon: '🔤', title: 'Click here for Encoding' },
    { label: 'Add New Language', route: '/languages', icon: '🌐', title: 'Click here for Languages' },
    { label: 'Add New SMSC Configuration', route: '/config', icon: '⚙️', title: 'Click here for Configuration' },
   // { label: 'More...', route: '/SMSClient/more/', icon: '⋯', title: 'More options' }
  ];

  logLevels = [
    { label: 'FATAL', value: 5 },
    { label: 'ERROR', value: 3 },
    { label: 'WARN', value: 4 },
    { label: 'INFO', value: 2 },
    { label: 'DEBUG', value: 6 },
    { label: 'TRACE', value: 1 }
  ];
}
