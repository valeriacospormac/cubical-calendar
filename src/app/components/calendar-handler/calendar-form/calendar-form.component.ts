import {IComponentOptions} from 'angular';
import {CalendarFormController} from './calendar-form.controller';

export const CalendarFormComponent: IComponentOptions = {
  bindings: {
    content: '<',
    onCreated: '<',
    timestamp: '<',
    title: '<'
  },
  controller: CalendarFormController,
  template: require('./calendar-form.html')
};
