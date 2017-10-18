import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComicComponent } from './components/comic/comic.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { SeriesComponent } from './components/series/series.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComicComponent,
    CustomerComponent,
    OrderComponent,
    SeriesComponent,
    SubscriptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
