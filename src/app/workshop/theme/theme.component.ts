import {Component, Input, OnInit} from '@angular/core';
import {Theme} from './theme.model';
import {WorkshopService} from '../workshop.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html'
})
export class ThemeComponent implements OnInit {

  @Input()
  public theme: number;

  activeTheme: Theme;

  constructor(public workshopService: WorkshopService) {}

  ngOnInit() {
    this.activeTheme = this.workshopService.getTheme(this.theme);
  }

  checkTheme() {
    this.workshopService.checkTheme(this.activeTheme);
  }

}
