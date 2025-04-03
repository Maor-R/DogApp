import { DogService } from './../../services/dog.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-toolbox',
  standalone: true,
  imports: [CommonModule, FormsModule, MatPaginatorModule, ReactiveFormsModule],
  templateUrl: './toolbox.component.html',
  styleUrl: './toolbox.component.scss',
})
export class ToolboxComponent {

  selectedTabIndex: number = 0;
  filterBreeds: any = [];
  listImagesBreeds: any = [];
  listImagesBreedsCurrPage: any = [];
  colors: any = [];
  firstAdoption: boolean = false;
  age?: number | undefined;
  errorAge: boolean = false;
  selectedBreed: any = { text: "" };
  selectedColor: any = 'default';
  weight?: number | undefined;
  errorsForm: boolean = false;
  errorWeight: boolean = false;
  errorSelectedColor: boolean = false;
  weightControl: FormControl = new FormControl("", [Validators.max(100), Validators.min(1)]);
  ageControl: FormControl = new FormControl("", [Validators.max(20), Validators.min(0)]);

  constructor(
    private dogService: DogService,
    private spinner: SpinnerVisibilityService
  ) {

    this.colors = ["White", "Black", "Brown", "Golden", "Gray", "Mixed"];

    this.dogService.getBreedsList().subscribe(
      (res: any) => {
   
        const arr = Object.entries(res.message);
         this.filterBreeds = arr.filter((e: any) => e[1].length > 0);
         console.log(this.selectedBreed)
         this.dogService.getImagesBreed(this.selectedBreed).subscribe(
          (resGib) => {

            resGib.message.forEach((e: any) => {
              this.listImagesBreeds.push(e)

            },
              (errGib: any) => { }
            );
          });
      }
      ,
      (err: any) => { }
    );
 
  }
 
  onPaginateChange(data: any) {
    this.listImagesBreedsCurrPage = this.listImagesBreeds.slice(data.pageIndex * data.pageSize, data.pageIndex * data.pageSize + data.pageSize);
  }

  submit() {
    if (this.selectedColor === "default") {
      this.errorSelectedColor = true;
    }
    else {
      this.errorSelectedColor = false;

    }

    if (!this.errorWeight && this.weight !== undefined && this.weight !== null &&
      !this.errorAge && this.age !== undefined && this.age !== null &&
      this.selectedColor !== undefined && this.selectedColor !== "default"
    ) {
      this.spinner.show();

      setTimeout(() => {
        alert("Your adoption request has been registered in the system");
        this.spinner.hide();
      }, 2000);

    }

  }


  createImagesList() {
     this.listImagesBreeds = [];

    this.dogService.getImagesBreed(this.selectedBreed.text).subscribe(
      (resGib) => {
        resGib.message.forEach((e: any) => {
          this.listImagesBreeds.push(e)
        }
          ,

          (errGib: any) => { }
        );
        this.listImagesBreedsCurrPage = this.listImagesBreeds.slice(0, 50);

      }

    );

  }

}
