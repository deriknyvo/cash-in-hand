import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignSharedModule } from '../material-design-shared/material-design-shared.module';

import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: 'create', component: CategoryCreateComponent }
];

@NgModule({
  declarations: [
    CategoryCreateComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignSharedModule
  ]
})
export class CategoriesModule { }
