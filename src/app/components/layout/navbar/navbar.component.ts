 import {  Router } from '@angular/router';
  import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule],
  providers:[ ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

   loggedIn: boolean = false;
   
   constructor(    public router:Router, public location: Location){

      
  }

  backUrl(){
    this.location.back()
  }
  }



