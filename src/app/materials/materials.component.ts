import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {
  AddMaterialDialogComponent
} from '../add-material-dialog/add-material-dialog.component';
import {
  EditMaterialDialogComponent
} from '../edit-material-dialog/edit-material-dialog.component';
import {Material} from '../model/Material';
import {MaterialService} from '../services/material.service';

@Component({
  selector : 'app-materials',
  templateUrl : './materials.component.html',
  styleUrls : [ './materials.component.css' ]
})
export class MaterialsComponent implements OnInit {
  displayedColumns = [ 'position', 'name', 'surfacefinishes', 'remove' ];
  dataSource: Material[];

  materialDialogRef: MatDialogRef<AddMaterialDialogComponent>;
  materialEditDialogRef: MatDialogRef<EditMaterialDialogComponent>;

  constructor(private dialog: MatDialog, private materialSrv: MaterialService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getMaterials(); }

  private getMaterials() {
    this.materialSrv.getMaterials().subscribe(
        data => { this.dataSource = data; },
        error => {
          this.snackBar.open("An error occurred while trying to materials: " +
                                 error.error,
                             "", {
                               duration : 2000,
                             });
        });
  }

  addMaterial(): void {
    this.materialDialogRef = this.dialog.open(AddMaterialDialogComponent);
  }

  editMaterial() {
    this.materialEditDialogRef = this.dialog.open(EditMaterialDialogComponent);
  }

  deleteMaterial(id: number) {
    this.materialSrv.deleteMaterial(id).subscribe(
        mat => {
          this.snackBar.open(mat.name + " was deleted successfully", "", {
            duration : 1500,
          });
          this.getMaterials();
        },
        error => {
          this.snackBar.open("An error occurred: " + error.error, "", {
            duration : 2000,
          });
        });
  }
}
