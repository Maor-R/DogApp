import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {   HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(
      NgHttpLoaderModule.forRoot()),
    provideHttpClient(), AppComponent, provideAnimations(), provideAnimations(), importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true}))
    
  ],
  // importProvidersFrom(RouterModule.forRoot(routes, {useHash: true})
};
