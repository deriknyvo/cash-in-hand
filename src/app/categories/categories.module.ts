import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignSharedModule } from '../material-design-shared/material-design-shared.module';
import { NgxMatColorPickerModule, MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';

import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { IconPickerInputComponent } from './icon-picker-input/icon-picker-input.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: 'create', component: CategoryCreateComponent }
];

@NgModule({
  declarations: [
    CategoryCreateComponent,
    CategoriesListComponent,
    IconPickerInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignSharedModule,
    NgxMatColorPickerModule
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class CategoriesModule { }
