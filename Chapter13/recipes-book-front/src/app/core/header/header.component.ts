import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedDataService) { }
  selectedRecipe$ = this.sharedService.selectedRecipeAction$;

  ngOnInit(): void {

  }

}



