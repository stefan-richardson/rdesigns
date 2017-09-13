import { NgModule } from '@angular/core';
import {
  MdSnackBarModule,
  MdIconModule,
  MdInputModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdCheckboxModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
  exports: [MdButtonModule, MdCheckboxModule],
})
export class CustomMaterialModule { }
