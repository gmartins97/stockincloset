import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatDialogModule} from '@angular/material';
import {GestureConfig} from '@angular/material';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {
  AddCategoryDialogComponent
} from './add-category-dialog/add-category-dialog.component';
import {
  AddMaterialDialogComponent
} from './add-material-dialog/add-material-dialog.component';
import {
  AddProductDialogComponent
} from './add-product-dialog/add-product-dialog.component';
import {
  AddSurfaceFinishDialogComponent
} from './add-surface-finish-dialog/add-surface-finish-dialog.component';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {
  EditCategoryDialogComponent
} from './edit-category-dialog/edit-category-dialog.component';
import {
  EditMaterialDialogComponent
} from './edit-material-dialog/edit-material-dialog.component';
import {
  EditSurfaceFinishDialogComponent
} from './edit-surface-finish-dialog/edit-surface-finish-dialog.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from './material.module';
import {MaterialsComponent} from './materials/materials.component';
import {ProductsComponent} from './products/products.component';
import {
  SurfaceFinishesComponent
} from './surface-finishes/surface-finishes.component';

const appRoutes: Routes = [
  {
    path : 'surfacefinishes',
    component : SurfaceFinishesComponent,
  },
  {
    path : 'materials',
    component : MaterialsComponent,
  },
  {path : 'categories', component : CategoriesComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  declarations : [
    AppComponent, SurfaceFinishesComponent, CategoriesComponent,
    MaterialsComponent, AddSurfaceFinishDialogComponent,
    AddCategoryDialogComponent, AddMaterialDialogComponent, ProductsComponent,
    HomeComponent, EditSurfaceFinishDialogComponent,
    EditMaterialDialogComponent, EditCategoryDialogComponent,
    AddProductDialogComponent
  ],
  imports : [
    BrowserModule, FormsModule, HttpModule, MaterialModule,
    BrowserAnimationsModule, MatDialogModule, HttpClientModule,
    RouterModule.forRoot(
        appRoutes, {enableTracing : false} // <-- debugging purposes only
        )
  ],
  entryComponents : [
    AddSurfaceFinishDialogComponent, EditMaterialDialogComponent,
    EditSurfaceFinishDialogComponent, AddCategoryDialogComponent,
    AddMaterialDialogComponent, EditCategoryDialogComponent,
    AddProductDialogComponent
  ],
  providers : [ {provide : HAMMER_GESTURE_CONFIG, useClass : GestureConfig} ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
