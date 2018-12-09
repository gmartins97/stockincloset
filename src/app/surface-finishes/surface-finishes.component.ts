import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {
  AddSurfaceFinishDialogComponent
} from '../add-surface-finish-dialog/add-surface-finish-dialog.component';
import {
  EditSurfaceFinishDialogComponent
} from '../edit-surface-finish-dialog/edit-surface-finish-dialog.component';
import {SurfaceFinish} from '../model/SurfaceFinish';
import {SurfaceFinishService} from '../services/surface-finish.service';

@Component({
  selector : 'app-surface-finishes',
  templateUrl : './surface-finishes.component.html',
  styleUrls : [ './surface-finishes.component.css' ]
})
export class SurfaceFinishesComponent implements OnInit {
  displayedColumns = [ 'position', 'name', 'remove' ];
  dataSource: SurfaceFinish[];

  surfaceFinishDialogRef: MatDialogRef<AddSurfaceFinishDialogComponent>;
  surfaceFinishEditDialogRef: MatDialogRef<EditSurfaceFinishDialogComponent>;

  constructor(private dialog: MatDialog,
              private surfaceFinishSrv: SurfaceFinishService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getSurfaceFinishes(); }

  private getSurfaceFinishes(): void {
    this.surfaceFinishSrv.getSurfaceFinishes().subscribe(
        data => { this.dataSource = data; },
        error => {
          this.snackBar.open(
              "An error occurred while trying to obtain surface finishes...",
              "", {
                duration : 2000,
              });
        });
  }

  addSurfaceFinish(): void {
    this.surfaceFinishDialogRef =
        this.dialog.open(AddSurfaceFinishDialogComponent);
  }

  editSurfaceFinish() {
    this.surfaceFinishEditDialogRef =
        this.dialog.open(EditSurfaceFinishDialogComponent);
  }

  deleteSurfaceFinish(id: number) {
    this.surfaceFinishSrv.deleteSurfaceFinish(id).subscribe(
        sf => {
          this.snackBar.open(sf.name + " surface finish deleted successfully",
                             "", {
                               duration : 1500,
                             });
          this.getSurfaceFinishes();
        },
        error => {
          this.snackBar.open("An error occurred: " + error.error, "", {
            duration : 2000,
          });
        });
  }
}
