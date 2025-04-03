 import { Routes } from '@angular/router';
import {
  ErrorPageComponent,
 
} from './components';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dogApp', pathMatch: 'full' },

  {
    path: 'dogApp' , 
    component: ToolboxComponent,
  },

  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error' },
];
