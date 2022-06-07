import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent } from './owner/owner.component';


const routes: Routes = [
  {path:'', component:AdminComponent, children:[
    {path:'', component:DashboardComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'owner', component:OwnerComponent}
  ]},
  {path:'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
