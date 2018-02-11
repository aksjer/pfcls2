import { Component, OnInit, Inject } from '@angular/core';
import { Gesture } from '../models/gesture.model';
import { SharedService } from '../shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.component.html',
  styleUrls: ['./gestures.component.css']
})
export class GesturesComponent implements OnInit {

  gestures: string[];

  constructor(
    private sharedService: SharedService,
    private dialogRef: MatDialogRef<GesturesComponent>,
    @Inject(MAT_DIALOG_DATA) private name: string
  ) { }

  ngOnInit() {
    this.gestures = this.sharedService.enumToArray(Gesture);
  }

  select(gesture: string) {
    this.dialogRef.close(gesture);
  }

}
