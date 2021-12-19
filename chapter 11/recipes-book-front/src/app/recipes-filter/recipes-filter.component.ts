import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concatMap, map } from 'rxjs/operators';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html'
})
export class RecipesFilterComponent implements OnInit {

  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(private service: RecipesService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  filterResults() {
    this.service.updateFilter(this.recipeForm.value);
  }

  clearFilter() {
  }



}
