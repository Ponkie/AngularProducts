import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {ProductComponent} from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
