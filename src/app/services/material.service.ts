import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';

@Injectable({providedIn : 'root'})
export class MaterialService extends GenericService {
  constructor(httpClient: HttpClient) { super(httpClient, "Material", 0); }

  getMaterials(): Observable<any> { return super.getAll(); }

  createMaterial(materialName: string,
                 surfaceFinishNames: string[]): Observable<any> {
    return super.create(
        {Name : materialName, SurfaceFinishNames : surfaceFinishNames});
  }

  updateMaterial(id: number, materialName: string,
                 surfaceFinishNames: string[]) {
    return super.update(
        id, {Name : materialName, SurfaceFinishNames : surfaceFinishNames});
  }

  deleteMaterial(id: number): Observable<any> { return super.delete(id); }
}
