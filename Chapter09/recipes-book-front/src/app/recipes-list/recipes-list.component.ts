import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
import { Recipe } from '../core/model/recipe.model';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.service.recipes$;
  /* The readonly stream */
  filterRecipesAction$ = this.service.filterRecipesAction$;
  filtredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      return recipes.filter(recipe => recipe.title?.toLowerCase()
      .indexOf(filter?.title?.toLowerCase() ?? '') != -1)
    })
  );

  constructor(private service: RecipesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onRating(event: any, recipe: Recipe) {
    console.log(event.value)
  }

  onCancelRating(recipe: Recipe) {
    console.log(recipe)
  }

}
