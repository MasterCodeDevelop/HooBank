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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
