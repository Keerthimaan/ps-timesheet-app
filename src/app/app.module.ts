import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routing';
import {AppComponent} from './app.component'
import { Routes } from "@angular/router/public_api";
import{RouterModule} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import{ RegisterComponent }from "./register/register.component";
import {MainComponent} from "./main/main.component";

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
   
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
