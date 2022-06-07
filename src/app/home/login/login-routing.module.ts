import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'', component:SigninComponent},
  {path:'signin',component:SigninComponent},
  {path:'register', loadChildren:()=>import('./register/register.module').then(_=>_.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
