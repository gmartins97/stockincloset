import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn : 'root'})
export class GenericService {
  private CATALOG_API_URL = 'https://stockincloset3dag8.azurewebsites.net/api/';
  name: string;

  constructor(private httpClient: HttpClient, name: string) {
    this.name = name;
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.CATALOG_API_URL + this.name)
        .pipe(map(this.extractData));
  }

  create(obj: Object): Observable<any> {
    return this.httpClient.post(this.CATALOG_API_URL + this.name, obj);
  }

  update(id: number, obj: Object): Observable<any> {
    return this.httpClient.put(this.CATALOG_API_URL + this.name + '/' + id,
                               obj);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.CATALOG_API_URL + this.name + '/' + id);
  }

  private extractData(res: Response) { return res || {}; }
}
