import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  destroy$ = new Subject<void>();
  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service
      .getRecipes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.recipes = result;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
