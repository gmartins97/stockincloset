import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [ './app.component.css' ]
})
export class AppComponent {
  title = 'Stock in Closet';

  constructor() {}

  notImplemented() { alert("Not implemented yet"); }
}
