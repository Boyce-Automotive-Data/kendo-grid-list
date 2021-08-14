import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {DateInputsModule} from "@progress/kendo-angular-dateinputs";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {GridModule} from "@progress/kendo-angular-grid";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftComponent } from './gift/gift.component';
import { GiftSizesComponent } from './gift/gift-sizes/gift-sizes.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftComponent,
    GiftSizesComponent,
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'kendo-grid-list'}),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Kendo
    DateInputsModule,
    DropDownsModule,
    GridModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
