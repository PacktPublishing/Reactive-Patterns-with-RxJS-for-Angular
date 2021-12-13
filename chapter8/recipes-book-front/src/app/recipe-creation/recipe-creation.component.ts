import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipesService } from '../core/services/recipes.service';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
})
export class RecipeCreationComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private service: RecipesService) { }


  ngOnInit(): void {
  }

  recipeForm = this.formBuilder.group({
    id: Math.floor(1000 + Math.random() * 9000),
    title: [''],
    ingredients: [''],
    tags: [''],
    imageUrl: [''],
    cookingTime: [''],
    yield: [''],
    prepTime: [''],
    steps: ['']
  });
  tags = recipeTags.TAGS;
  valueChanges$ = this.recipeForm.valueChanges.pipe(
    concatMap(formValue => this.service.saveRecipe(formValue)),
    catchError(errors => of(errors)),
    tap(result=>this.saveSuccess(result))
  );


  saveSuccess(result: any) {
    console.log('Saved successfully');
  }


}
