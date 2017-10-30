import {module} from 'angular';
import {thisModuleName} from '../config';
import {CalendarHandlerModule} from "./calendar-handler/calendar-handler.module";

export const ComponentsModule = module(thisModuleName + __dirname,
  [
    CalendarHandlerModule
  ])
  .name;
