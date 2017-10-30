import { module } from 'angular';
import {thisModuleName} from '../../../config';
import {EventsItemsComponent} from './events-items.component';
import './_events-items.scss';

export const EventsItemsModule = module(thisModuleName + __dirname, [])
  .component('ccEventsItems', EventsItemsComponent)
  .name;
