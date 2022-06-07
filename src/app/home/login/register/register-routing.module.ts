import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { CustomerComponent } from './customer/customer.component';
import { OwnerComponent } from './owner/owner.component';


const routes: Routes = [
  {path:'', component:RegisterComponent, children:[
    {path:'', component:CustomerComponent},
    {path:'customer', component:CustomerComponent},
    {path:'owner', component:OwnerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
