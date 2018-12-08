import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {SurfaceFinish} from '../model/SurfaceFinish';
import {MaterialService} from '../services/material.service';
import {SurfaceFinishService} from '../services/surface-finish.service';

@Component({
  selector : 'app-add-material-dialog',
  templateUrl : './add-material-dialog.component.html',
  styleUrls : [ './add-material-dialog.component.css' ]
})
export class AddMaterialDialogComponent implements OnInit {
  materialName: string;
  surfaceFinishList: SurfaceFinish[];
  selectedSurfaceFinishesNames: string[];

  constructor(private materialSrv: MaterialService,
              public snackBar: MatSnackBar,
              private surfaceFinishSrv: SurfaceFinishService) {}

  ngOnInit() { this.getSurfaceFinishes(); }

  private getSurfaceFinishes(): void {
    this.surfaceFinishSrv.getSurfaceFinishes().subscribe(
        data => { this.surfaceFinishList = data; });
  }

  createMaterial() {
    let matName = this.materialName.trim();
    if (matName && this.selectedSurfaceFinishesNames.length > 0) {
      this.materialSrv
          .createMaterial(matName, this.selectedSurfaceFinishesNames)
          .subscribe(material => {
            this.snackBar.open(material.name + " material created successfully",
                               "", {
                                 duration : 2000,
                               });
            this.materialName = "";
          });
    } else {
      this.snackBar.open("Material's name and surface finishes can't be empty",
                         "", {
                           duration : 1500,
                         });
    }
  }
}
