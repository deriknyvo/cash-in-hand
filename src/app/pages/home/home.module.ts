import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideBarModule } from '../../components/side-bar/side-bar.module';
import { ProfileModule } from '../../components/profile/profile.module';
import { ChatsModule } from '../../components/chats/chats.module';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SideBarModule,
    ProfileModule,
    ChatsModule
  ]
})
export class HomeModule { }
