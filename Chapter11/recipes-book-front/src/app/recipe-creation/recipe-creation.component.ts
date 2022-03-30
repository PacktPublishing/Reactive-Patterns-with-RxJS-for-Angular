import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipesService } from '../core/services/recipes.service';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, finalize, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { UploadRecipesPreviewService } from '../core/services/upload-recipes-preview.service';

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
})
export class RecipeCreationComponent {
  counter: number = 0;
  uploadProgress: number=0;

  constructor(private formBuilder: FormBuilder, private service: RecipesService,
    private uploadService: UploadRecipesPreviewService) { }
  recipeForm = this.formBuilder.group({
    id: Math.floor(1000 + Math.random() * 9000),
    title: [''],
    ingredients: [''],
    tags: [''],
    cookingTime: [''],
    yield: [''],
    prepTime: [''],
    steps: ['']
  });
  tags = recipeTags.TAGS;
  valueChanges$ = this.recipeForm.valueChanges.pipe(
    concatMap(formValue => this.service.saveRecipe(formValue)),
    catchError(errors => of(errors)),
    tap(result => this.saveSuccess(result))
  );

  uploadedFilesSubject$ = new BehaviorSubject<File[]>([]);
  uploadRecipeImages$ = this.uploadedFilesSubject$.pipe(
    switchMap(uploadedFiles => forkJoin(uploadedFiles.map((file: File) =>
      this.uploadService.upload(this.recipeForm.value.id, file).pipe(
        catchError(errors => of(errors)),
        finalize(() => this.calculateProgressPercentage(++this.counter, uploadedFiles.length))
      ))))
  )
  saveSuccess(result: any) {
    console.log('Saved successfully');
  }

  onUpload(files: File[]) {
    this.uploadedFilesSubject$.next(files);
  }

  private calculateProgressPercentage(completedRequests: number, totalRequests: number) {
    this.uploadProgress = (completedRequests/totalRequests)*100;
  }

}
