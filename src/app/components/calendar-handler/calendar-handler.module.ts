import { module } from 'angular';
import {thisModuleName} from '../../config';
import {CalendarHandlerComponent} from './calendar-handler.component';
import {CalendarFormModule} from './calendar-form/calendar-form.module';
import {EventItemModule} from './event-item/event-item.module';
import {CalendarHandlerService} from './calendar-service';
import './_calendar-handler.scss';

export const CalendarHandlerModule = module(thisModuleName + __dirname, [
  CalendarFormModule,
  EventItemModule
])
  .component('ccCalendarHandler', CalendarHandlerComponent)
  .service('calendarService', CalendarHandlerService)
  .name;
