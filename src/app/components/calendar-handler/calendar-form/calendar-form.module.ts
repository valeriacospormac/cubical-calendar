import { module } from 'angular';
import {thisModuleName} from '../../../config';
import {CalendarFormComponent} from './calendar-form.component';

export const CalendarFormModule = module(thisModuleName + __dirname, [])
  .component('ccCalendarForm', CalendarFormComponent)
  .name;
