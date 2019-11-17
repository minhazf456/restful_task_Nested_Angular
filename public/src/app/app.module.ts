import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
import { HttpService } from './http.service'; /// To use our service, we'll need to register it with the app. Open app.module.ts and import HttpService. Provide the file path to your service file. Next, include HttpService in the array of providers.

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
