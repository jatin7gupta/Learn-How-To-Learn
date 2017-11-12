import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { CreateComponent } from './body/create/create.component';
import {WebService} from './web.service';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'trending',
        component: HomeComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'**',
        component: HomeComponent
      }
    ])
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
