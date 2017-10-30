import { module } from 'angular';
import {thisModuleName} from '../../config';
import {CalendarHandlerComponent} from './calendar-handler.component';
import {CalendarFormModule} from './calendar-form/calendar-form.module';
import {CalendarHandlerService} from './calendar-service';
import './_calendar-handler.scss';
import {EventsItemsModule} from './events-items/events-items.module';

export const CalendarHandlerModule = module(thisModuleName + __dirname, [
  CalendarFormModule,
  EventsItemsModule
])
  .component('ccCalendarHandler', CalendarHandlerComponent)
  .service('calendarService', CalendarHandlerService)
  .name;
