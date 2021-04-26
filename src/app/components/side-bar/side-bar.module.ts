import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { MenusModule } from '../menus/menus.module';
import { UserMenuModule } from '../user-menu/user-menu.module';

import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    MenusModule,
    UserMenuModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
