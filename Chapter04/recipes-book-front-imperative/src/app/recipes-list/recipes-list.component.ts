import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  subscription: Subscription | undefined;
  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.subscription = this.service.getRecipes().subscribe((result) => {
      this.recipes = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
