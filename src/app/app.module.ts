import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { StatsComponent } from './stats/stats.component';
import { FeaturesComponent } from './features/features.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './product/product.component';
import { CardDealComponent } from './card-deal/card-deal.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { GetServiceComponent } from './get-service/get-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetStartedComponent,
    StatsComponent,
    FeaturesComponent,
    ButtonComponent,
    CardComponent,
    ProductComponent,
    CardDealComponent,
    TestimonialsComponent,
    ClientsComponent,
    GetServiceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
