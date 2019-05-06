import {Component} from '@angular/core';

@Component({
  selector: 'app-workshop',
  styleUrls: ['./workshop.component.scss'],
  templateUrl: './workshop.component.html'
})
export class WorkshopComponent {

  activeTheme: Theme;

  setActiveTheme(theme: Theme) {
    this.activeTheme = theme;
  }
}
