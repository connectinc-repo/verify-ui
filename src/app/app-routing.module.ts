import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OnboardEmpComponent } from './main/onboard-emp/onboard-emp.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'auth', children:[
    {path:'login',component:LoginComponent}
  ]},
  {path:'employee', children:[
    {path:'onboard', component:OnboardEmpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
