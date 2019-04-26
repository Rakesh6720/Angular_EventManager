import { Component } from '@angular/core';
import { EventListComponent } from './events/events-list.component';

@Component({
  selector: 'events-app',
  template: '<events-list></events-list>'
})
export class EventsAppComponent {
  title = 'app';
}
