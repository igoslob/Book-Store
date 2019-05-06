import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './book-store.filter';

import { AppComponent } from './book-store.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }