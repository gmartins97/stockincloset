import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';

@Injectable({providedIn : 'root'})
export class SurfaceFinishService extends GenericService {

  constructor(httpClient: HttpClient) { super(httpClient, "SurfaceFinish", 0); }

  getSurfaceFinishes(): Observable<any> { return super.getAll(); }

  createSurfaceFinish(surfaceFinishName: string): Observable<any> {
    return super.create({Name : surfaceFinishName});
  }

  updateSurfaceFinish(id: number, surfaceFinishName: string): Observable<any> {
    return super.update(id, {Name : surfaceFinishName});
  }

  deleteSurfaceFinish(id: number): Observable<any> { return super.delete(id); }
}
