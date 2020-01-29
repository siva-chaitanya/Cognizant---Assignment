import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
