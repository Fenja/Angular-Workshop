import {NgModule} from '@angular/core';
import {WorkshopComponent} from './workshop.component';
import {ThemeListComponent} from './theme/list/theme-list.component';
import {CommonModule} from '@angular/common';
import {ThemeComponent} from './theme/theme.component';

@NgModule({
  declarations: [
    WorkshopComponent,
    ThemeComponent,
    ThemeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkshopComponent
  ]
})
export class WorkshopModule {}
