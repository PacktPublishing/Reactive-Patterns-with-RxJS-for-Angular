import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, of, throwError, timer } from 'rxjs';
import { catchError, delayWhen, map, retry, retryWhen, tap } from 'rxjs/operators';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.service.recipes$;

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
  }



}
