import { module } from 'angular';
import {thisModuleName} from '../../../config';
import {EventItemComponent} from './event-item.component';
import './_event-item.scss';

export const EventItemModule = module(thisModuleName + __dirname, [])
  .component('ccEventItem', EventItemComponent)
  .name;
