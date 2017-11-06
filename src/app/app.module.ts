import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RoundPanelComponent } from './components/round-panel/round-panel.component';
import { RoundTabsComponent } from './components/round-tabs/round-tabs.component';
import { QuestionComponent } from './components/question/question.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DemoComponent,
    SubscribeComponent,
    RoundPanelComponent,
    RoundTabsComponent,
    QuestionComponent,
    CategorySelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "register",
        component: RegisterComponent
      },{
        path: "login",
        component: LoginComponent
      },{
        path: "home",
        component: HomeComponent
      },{
        path: "demo",
        component: DemoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
