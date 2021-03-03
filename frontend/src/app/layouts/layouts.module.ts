import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { NotPageComponent } from './not-page/not-page.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    NotPageComponent
  ],
  exports: [
    MainComponent,
    NotPageComponent
  ],
  providers: []
})
export class LayoutsModule { }