import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { TrimCreditCardPipe } from './shared/pipe/trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './page/admin/admin.component';
import { BsDropdownModule, BsDropdownDirective } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleFormComponent,
    AdvFormComponent,
    HighlightDirective,
    TrimCreditCardPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
