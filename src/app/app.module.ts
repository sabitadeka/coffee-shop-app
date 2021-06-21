import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppComponent
} from './app.component';
import {
  DataService
} from './service/data.service';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  HeaderComponent
} from './header/header.component';
import {
  FooterComponent
} from './footer/footer.component';
import {
  BeverageDetailsComponent
} from './beverage-details/beverage-details.component';
import {
  CustomerBalancesheetComponent
} from './customer-balancesheet/customer-balancesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BeverageDetailsComponent,
    CustomerBalancesheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
