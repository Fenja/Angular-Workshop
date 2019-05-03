import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html'
})
export class ThemeListComponent {

  @Output() activeThemeChange: EventEmitter<number> = new EventEmitter();

  setActiveTheme(id: number) {
    this.activeThemeChange.emit(id);
  }
}
