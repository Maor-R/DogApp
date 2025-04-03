 import {  Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
 import { BehaviorSubject } from 'rxjs';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components';
import { NgHttpLoaderModule } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    NgHttpLoaderModule,
    
  ],
  providers:[ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 })
export class AppComponent {
  title: string;
  loggedIn: boolean = false;
  public spinner = SpinnerComponent;

  static isBrowser = new BehaviorSubject<boolean | undefined | null>(null);
  constructor(
     @Inject(PLATFORM_ID) private platformId: any,
    public http: HttpClient,

  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
    this.title = 'Dog App';    
 
  }
}
