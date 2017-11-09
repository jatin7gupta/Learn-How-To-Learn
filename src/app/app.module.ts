import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { CreateComponent } from './body/create/create.component';
import { FavouritesComponent } from './body/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    CreateComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'create',
        component: BodyComponent,
        children: [
          { path: '', component: CreateComponent },
        ]
      },
      {
        path: 'favourite',
        component: BodyComponent,
        children: [
          { path: '', component: FavouritesComponent },
        ]
      },
      {
        path:'home',
        component: BodyComponent,
        children: [
          { path: '', component: HomeComponent },
          ]

      },
      {
        path: '',
        component: BodyComponent,
        children: [
          { path: '', component: HomeComponent },
        ]
      },
      {
        path:'**',
        component: BodyComponent,
        children: [
          { path: '', component: HomeComponent },
        ]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
