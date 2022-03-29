import { AfterViewInit, Component } from '@angular/core';
import { map } from 'rxjs';
import { RealTimeService } from './core/services/real-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  //declare the messages$ observable
  //messages$ = this.service.messages$.pipe(map(rows => rows.message));
  constructor(private service: RealTimeService) {
    //connect to the WS
    //this.service.connect();
  }
}
