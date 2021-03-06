import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {FooterModule} from "../footer/footer.module";

@NgModule({
  declarations: [ AuthComponent ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FooterModule,
  ],
  providers: [ CookieService ],
  bootstrap: [ AuthComponent ]
})
export class AuthModule { }
