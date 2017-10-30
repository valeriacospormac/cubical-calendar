import {IComponentOptions} from 'angular';
import {CalendarHandlerController} from './calendar-handler.controller';

export const CalendarHandlerComponent: IComponentOptions = {
  bindings: {},
  controller: CalendarHandlerController,
  template: require('./calendar-handler.html')
};
