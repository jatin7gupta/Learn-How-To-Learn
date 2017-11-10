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
import {WebService} from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    CreateComponent,
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
          { path: '', component: HomeComponent },
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
        component: HomeComponent,
        /*children: [
          { path: '', component: HomeComponent },
        ]*/
      }

    ])
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
