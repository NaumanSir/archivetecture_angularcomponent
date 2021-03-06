import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpService
  ],
  // providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
