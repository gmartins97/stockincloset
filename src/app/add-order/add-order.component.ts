import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector : 'app-add-order',
  templateUrl : './add-order.component.html',
  styleUrls : [ './add-order.component.css' ]
})
export class AddOrderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  back() { this.router.navigateByUrl('/orders'); }
}
