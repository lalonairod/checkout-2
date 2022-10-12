import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { NavigationMenuComponent } from './components/shared/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ /* {provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true} */],
  bootstrap: [AppComponent]
})
export class AppModule { }
