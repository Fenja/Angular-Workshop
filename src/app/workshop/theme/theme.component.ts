import {Component, Input} from '@angular/core';
import {Theme} from './theme.model';
import {WorkshopService} from '../workshop.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html'
})
export class ThemeComponent {

  @Input()
  public theme: Theme;

  constructor(public workshopService: WorkshopService) {}

  checkTheme() {
    this.workshopService.checkTheme(this.theme);
  }

}
