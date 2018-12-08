import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';

@Injectable({providedIn : 'root'})
export class CategoryService extends GenericService {
  constructor(httpClient: HttpClient) { super(httpClient, "Category", 0); }

  getCategories(): Observable<any> { return super.getAll(); }

  createCategory(description: string, parentCatDesc: string): Observable<any> {
    return super.create(
        {description : description, parentDescription : parentCatDesc});
  }

  updateCategory(id: number, description: string, parentCatDesc: string) {
    return super.update(
        id, {description : description, parentDescription : parentCatDesc});
  }

  deleteCategory(id: number) { return super.delete(id); }
}
