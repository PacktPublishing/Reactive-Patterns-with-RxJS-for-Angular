import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'recipes/create', component: RecipeCreationComponent},
  { path: '', component: HomeComponent  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




