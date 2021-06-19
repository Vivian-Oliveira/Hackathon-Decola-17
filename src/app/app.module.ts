import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LawPageComponent } from './components/law-page/law-page.component';
import { MatCardModule } from '@angular/material/card';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { InstituicoesCardComponent } from './components/instituicoes-card/instituicoes-card.component';
import { LawCardComponent } from './components/law-card/law-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HelpPageComponent,
    MenuTemplateComponent,
    LawPageComponent,
    InstituicoesCardComponent,
    LawCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
