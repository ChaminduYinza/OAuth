import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { GoogleApiModule, GoogleApiService, GoogleAuthService, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig } from "ng-gapi";
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


let gapiClientConfig: NgGapiClientConfig = environment.gapiClientConfig
gapiClientConfig.client_id = gapiClientConfig.client_id.replace(/@|#/g, '')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
