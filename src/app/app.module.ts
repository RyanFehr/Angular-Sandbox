import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdToolbarModule, MdButtonModule, MdGridListModule } from "@angular/material";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GatewayComponent } from './gateway/gateway.component';
import { AutocompleteExampleComponent } from "./examples/Autocomplete/autocomplete-example.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GatewayComponent,
    AutocompleteExampleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MdCardModule,
    MdInputModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
