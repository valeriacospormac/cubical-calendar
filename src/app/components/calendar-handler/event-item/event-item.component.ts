import {IComponentOptions} from 'angular';
import {EventItemController} from './event-item.controller';

export const EventItemComponent: IComponentOptions = {
  bindings: {
    event: '<'
  },
  controller: EventItemController,
  template: require('./event-item.html')
};
