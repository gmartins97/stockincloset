import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Dimensions} from '../model/Dimension';
import {Product} from '../model/Product';

import {GenericService} from './generic.service';

@Injectable({providedIn : 'root'})
export class ProductService extends GenericService {
  constructor(httpClient: HttpClient) { super(httpClient, "Product", 0); }

  getProducts(): Observable<any> { return super.getAll(); }

  createProduct(name: string, categoryDescription: string,
                dimensions: Dimensions, parts: string[],
                materialNames: string[], minOccupancyPercentage: number,
                maxOccupancyPercentage: number): Observable<any> {
    let prod: Product = {
      name : name,
      categoryDescription : categoryDescription,
      dimensions : dimensions,
      parts : parts,
      materialNames : materialNames,
      minOccupancyPercentage : minOccupancyPercentage,
      maxOccupancyPercentage : maxOccupancyPercentage
    };
    return super.create(prod);
  }

  deleteProduct(id: number): Observable<any> { return super.delete(id); }
}
