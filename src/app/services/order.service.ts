import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Order} from '../model/Order';

import {GenericService} from './generic.service';

@Injectable({providedIn : 'root'})
export class OrderService extends GenericService {

  constructor(httpClient: HttpClient) { super(httpClient, "order", 1); }

  getOrders(): Observable<any> { return super.getAll(); }

  createOrder(order: Order): Observable<any> { return super.create(order); }
}
