import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SurfaceFinish} from '../model/SurfaceFinish';
import {SurfaceFinishService} from '../services/surface-finish.service';
@Component({
  selector : 'app-edit-surface-finish-dialog',
  templateUrl : './edit-surface-finish-dialog.component.html',
  styleUrls : [ './edit-surface-finish-dialog.component.css' ]
})
export class EditSurfaceFinishDialogComponent implements OnInit {
  selectedSurfaceFinishId: number;
  surfaceFinishList: SurfaceFinish[];
  surfaceFinishName: string;
  constructor(private surfaceFinishSrv: SurfaceFinishService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getSurfaceFinishes(); }

  private getSurfaceFinishes(): void {
    this.surfaceFinishSrv.getSurfaceFinishes().subscribe(
        data => { this.surfaceFinishList = data; });
  }

  updateSurfaceFinish() {
    if (this.selectedSurfaceFinishId && this.surfaceFinishName.trim()) {
      this.surfaceFinishSrv
          .updateSurfaceFinish(this.selectedSurfaceFinishId,
                               this.surfaceFinishName)
          .subscribe(
              () => {
                this.snackBar.open("Surface Finish updated successfully", "", {
                  duration : 1500,
                });
              },
              error => {
                this.snackBar.open("An error occurred...", "", {
                  duration : 2000,
                });
              });
    } else {
      this.snackBar.open("Surface Finish's name can't be empty", "", {
        duration : 1500,
      });
    }
  }
}
