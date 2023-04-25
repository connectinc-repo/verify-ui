import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { TopnavComponent } from './common/topnav/topnav.component';
import { OnboardEmpComponent } from './main/onboard-emp/onboard-emp.component';
import { EmployeeService } from './service/employee/employee.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    OnboardEmpComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle',
          distance: 12,
        },
        vertical: {
          position: 'bottom',
          distance: 80,
          gap: 10,
        },
      },
      behaviour:{
        autoHide:3000
      }
    }),

  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
