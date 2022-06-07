import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnerComponent } from './owner/owner.component';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    OwnerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesignModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
