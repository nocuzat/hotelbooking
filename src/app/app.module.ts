import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    ContactComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
