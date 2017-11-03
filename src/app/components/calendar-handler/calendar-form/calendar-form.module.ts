import { module } from 'angular';
import {thisModuleName} from '../../../config';
import {CalendarFormComponent} from './calendar-form.component';
import './_calendar-form.scss';

export const CalendarFormModule = module(thisModuleName + __dirname, [])
  .component('ccCalendarForm', CalendarFormComponent)
  .name;
