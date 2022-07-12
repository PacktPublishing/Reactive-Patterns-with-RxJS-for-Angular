import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  constructor(private service: RecipesService) {}
  recipes$ = this.service.receipes$;
}
