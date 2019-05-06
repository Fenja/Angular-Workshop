import {Component, EventEmitter, Output} from '@angular/core';
import {Theme} from '../theme.model';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html'
})
export class ThemeListComponent {

  @Output() activeThemeChange: EventEmitter<Theme> = new EventEmitter();

  setActiveTheme(theme: Theme) {
    this.activeThemeChange.emit(theme);
  }
}
