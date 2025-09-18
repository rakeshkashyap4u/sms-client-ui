
import { Routes } from '@angular/router';
import { NegativeResponseCode } from './negative-response-code/negative-response-code';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { ConnectionStatus } from './connection-status/connection-status';
import { MoConfiguration } from './mo-configuration/mo-configuration';
import { UploadContent } from './upload-content/upload-content';
import { ShowActivePromotions } from './show-active-promotions/show-active-promotions';
import { StartPromotion } from './start-promotion/start-promotion';
import { Encoding } from './encoding/encoding';
import { Config } from './config/config';
import { AddLanguage } from './add-language/add-language';
import { Language } from './language/language';
import { AddSMSConfig } from './add-smsconfig/add-smsconfig';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // home redirects to dashboard
  { path: 'dashboard', component: Dashboard },
  { path: 'negative-response-codes', component: NegativeResponseCode },
  { path: 'connectionStatus', component: ConnectionStatus },
  { path: 'moconfigurations', component: MoConfiguration },
  { path: 'uploadContent', component: UploadContent },
  { path: 'showActivePromotions', component: ShowActivePromotions },
  { path: 'startPromotion', component: StartPromotion },
  { path: 'encoding', component: Encoding },
  { path: 'languages', component: Language },
  { path: 'config', component: Config },
  { path: 'addsmsc', component: AddSMSConfig },
  { path: 'newLanguage', component: AddLanguage },




  { path: '**', redirectTo: '/dashboard' } // fallback
];