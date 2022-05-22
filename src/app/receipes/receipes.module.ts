import { RecipesRoutingModule } from './receipes-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ReceipesComponent } from './receipes.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe-list/receipe-item/receipe-item.component';
import { ReceipeStartComponent } from './receipe-start/receipe-start.component';
import { ReceipeEditComponent } from './receipe-edit/receipe-edit.component';

@NgModule({
  declarations: [
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ReceipeStartComponent,
    ReceipeEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class ReceipesModule {}
