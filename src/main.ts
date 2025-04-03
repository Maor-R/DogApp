import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";


bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
