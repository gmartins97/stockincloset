import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn : 'root'})
export class GenericService {
  private API_URL: string;
  name: string;

  constructor(private httpClient: HttpClient, name: string, op: number) {
    if (op == 0) {
      this.API_URL = 'https://stockincloset3dag8.azurewebsites.net/api/';
    } else {
      this.API_URL = 'https://sic-orders-3da-g8.herokuapp.com/api/';
    }
    this.name = name;
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL + this.name)
        .pipe(map(this.extractData));
  }

  create(obj: Object): Observable<any> {
    return this.httpClient.post(this.API_URL + this.name, obj);
  }

  update(id: any, obj: Object): Observable<any> {
    return this.httpClient.put(this.API_URL + this.name + '/' + id, obj);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.name + '/' + id);
  }

  private extractData(res: Response) { return res || {}; }
}
