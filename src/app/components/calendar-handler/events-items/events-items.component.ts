import {IComponentOptions} from 'angular';
import {EventsItemsController} from './events-items.controller';

export const EventsItemsComponent: IComponentOptions = {
  bindings: {
    content: '<',
    events: '<',
    timestamp: '<',
    title: '<'
  },
  controller: EventsItemsController,
  template: require('./events-items.html')
};
