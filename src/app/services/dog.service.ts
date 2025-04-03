import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  // apiUrl: string;
  

  constructor(private http: HttpClient) {
    // this.apiUrl = environment.baseApiUrl;
  }

  getBreedsList() {
    return this.http.get<any>(` https://dog.ceo/api/breeds/list/all`);
  }

  getImagesBreed(breed:string) {
    return this.http.get<any>(` https://dog.ceo/api/breed/${breed}/images`);  }
}
