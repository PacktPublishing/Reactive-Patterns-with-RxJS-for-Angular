import { Component, OnInit } from '@angular/core';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}