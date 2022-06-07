import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./home/home.module').then(_=>_.HomeModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(_=>_.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
