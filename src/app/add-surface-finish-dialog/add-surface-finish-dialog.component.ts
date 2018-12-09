import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {SurfaceFinishService} from '../services/surface-finish.service';

@Component({
  selector : 'app-add-surface-finish-dialog',
  templateUrl : './add-surface-finish-dialog.component.html',
  styleUrls : [ './add-surface-finish-dialog.component.css' ]
})
export class AddSurfaceFinishDialogComponent implements OnInit {

  surfaceFinishName: string;

  constructor(private surfaceFinishSrv: SurfaceFinishService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {}

  createSurfaceFinish() {
    let sfName = this.surfaceFinishName.trim();
    if (sfName) {
      this.surfaceFinishSrv.createSurfaceFinish(sfName).subscribe(
          surfaceFinish => {
            this.snackBar.open(surfaceFinish.name +
                                   " surface finish created successfully",
                               "", {
                                 duration : 2000,
                               });
            this.surfaceFinishName = "";
          },
          error => {
            this.snackBar.open("An error occurred: " + error.error, "",
                               {duration : 1500});
          });
    } else {
      this.snackBar.open("Surface finish's name can't be empty", "", {
        duration : 1500,
      });
    }
  }
}
