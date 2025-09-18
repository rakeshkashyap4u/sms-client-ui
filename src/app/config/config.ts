import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';


interface Configs {
  circle: string;
  serverIp: string;
  serverPort: string;
  serviceUri: string;
  userid: string;
  password: string;
  bindMode: string;
  opId: number;
}

interface Detail {
  id: number;
  operator: string;
  country: string;
  protocol: string;
}

@Component({
  selector: 'app-config',
  imports: [MatIcon],
  templateUrl: './config.html',
  styleUrl: './config.css'
})
export class Config {

  constructor(private router: Router) {}

  configurations: Configs[] = [
    {
      circle: 'Circle1',
      serverIp: '192.168.0.1',
      serverPort: '8080',
      serviceUri: '/smsc1',
      userid: 'user1',
      password: 'pass1',
      bindMode: 'transceiver',
      opId: 101
    },
    {
      circle: 'Circle2',
      serverIp: '192.168.0.2',
      serverPort: '8081',
      serviceUri: '/smsc2',
      userid: 'user2',
      password: 'pass2',
      bindMode: 'receiver',
      opId: 102
    }
  ];

  detaillist: Detail[] = [
    { id: 101, operator: 'OperatorA', country: 'India', protocol: 'SMPP' },
    { id: 102, operator: 'OperatorB', country: 'US', protocol: 'HTTP' }
  ];

  addNewConfiguration() {
    alert('Redirect to Add New Configuration page');
    this.router.navigate(['/addsmsc']);

  }

  getDetailByOpId(opId: number) {
    return this.detaillist.find(d => d.id === opId);
  }

}