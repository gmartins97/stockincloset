import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {Material} from '../model/Material';
import {MaterialService} from '../services/material.service';

@Component({
  selector : 'app-edit-material-dialog',
  templateUrl : './edit-material-dialog.component.html',
  styleUrls : [ './edit-material-dialog.component.css' ]
})
export class EditMaterialDialogComponent implements OnInit {
  selectedMaterialId: number;
  materialList: Material[];
  materialName: string;
  selectedSurfaceFinishesNames: string[];
  constructor(private materialSrv: MaterialService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getMaterials(); }

  private getMaterials(): void {
    this.materialSrv.getMaterials().subscribe(
        data => { this.materialList = data; });
  }

  updateMaterial() {
    if (this.selectedMaterialId && this.materialName.trim() &&
        this.selectedSurfaceFinishesNames.length) {
      this.materialSrv
          .updateMaterial(this.selectedMaterialId, this.materialName,
                          this.selectedSurfaceFinishesNames)
          .subscribe(
              () => {
                this.snackBar.open("Material updated successfully", "", {
                  duration : 1500,
                });
              },
              error => {this.snackBar.open("An error occurred: " + error.error,
                                           "", {duration : 1500})});
    } else {
      this.snackBar.open("All fields must be fulfilled", "", {
        duration : 1500,
      });
    }
  }
}
