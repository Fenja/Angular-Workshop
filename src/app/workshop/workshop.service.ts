import {Injectable} from '@angular/core';
import {Theme} from './theme/theme.model';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private themes: Theme[] = [
    {
      id: 1,
      title: 'Module',
      description: 'Encapsulates components, services and models.',
      done: false
    },
    {
      id: 2,
      title: 'Component',
      description: 'Hierarchically arranged. They serve logic and a view.',
      done: false
    },
    {
      id: 3,
      title: 'Template',
      description: 'HTML is combined with Angular markup to display a view.',
      done: false
    },
    {
      id: 4,
      title: 'Service',
      description: 'Delivers logic to several components.',
      done: false
    },
    {
      id: 5,
      title: 'Model',
      description: 'Logical unit to deliver a data scheme.',
      done: false
    },
  ];

  getThemes() {
    return this.themes;
  }


  checkTheme(theme: Theme) {
    const foundTheme = this.themes.filter(t => t.id === theme.id)[0];
    foundTheme.done = true;
  }

}
