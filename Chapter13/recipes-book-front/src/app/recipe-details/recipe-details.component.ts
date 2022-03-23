import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../core/services/shared-data.service';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private sharedService: SharedDataService) { }
  selectedRecipe$ = this.sharedService.selectedRecipeAction$;

  ngOnInit(): void {
  }

}