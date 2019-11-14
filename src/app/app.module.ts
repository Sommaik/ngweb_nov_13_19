import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { HighlightDirective } from './highlight.directive';
import { TrimCreditCardPipe } from './trim-credit-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleFormComponent,
    AdvFormComponent,
    HighlightDirective,
    TrimCreditCardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
