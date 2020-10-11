import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-pokemon-dialog',
  templateUrl: './get-pokemon-dialog.component.html',
  styleUrls: ['./get-pokemon-dialog.component.scss']
})
export class GetPokemonDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Congratulation;
    }
  ) { }

  ngOnInit(): void { }

}
