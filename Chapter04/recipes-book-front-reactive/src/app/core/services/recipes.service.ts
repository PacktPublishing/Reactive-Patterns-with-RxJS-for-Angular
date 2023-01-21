import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../model/recipe.model';
const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  receipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
}
