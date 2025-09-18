import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Languages {
  language: string;
  dataCoding: string;
  serviceType: string;
  encoding: string;
  script: string;
}


@Component({
  selector: 'app-language',
  imports: [CommonModule],
  templateUrl: './language.html',
  styleUrl: './language.css'
})
export class Language implements OnInit {




  languageList: Languages[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // TODO: Replace with API call
    this.languageList = [
      { language: '_E', dataCoding: '7-bit', serviceType: 'SMS', encoding: 'UTF-8', script: 'Latin' },
      { language: '_F', dataCoding: '8-bit', serviceType: 'MMS', encoding: 'ISO-8859-1', script: 'Latin' },
      { language: '_A', dataCoding: 'Unicode', serviceType: 'SMS', encoding: 'UTF-16', script: 'Arabic' }
    ];
  }

  getLanguageName(code: string): string {
    switch (code) {
      case '_F': return 'French';
      case '_S': return 'Spanish';
      case '_A': return 'Arabic';
      case '_P': return 'Portuguese';
      case '_E': return 'English';
      default: return code;
    }
  }

  goToLanguageInfo(lang: string) {
    // In real app: use Angular Router
    window.location.href = `/languageInfo?languagename=${lang}`;
  }

  addNewLanguage() {
    // In real app: navigate to add language page
    console.log("addNewLanguage..")
    this.router.navigate(['/newLanguage']);

  }
}
