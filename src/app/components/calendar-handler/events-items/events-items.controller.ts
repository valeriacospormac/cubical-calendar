import {IController} from 'angular';
import {IEvent} from '../../../../index';

export class EventsItemsController implements IController {
  public content: string;
  public timestamp: string;
  public title: string;

  constructor() {
    'ngInject';
  }

  // public $onChanges(newEvent) {
  // this.event = newEvent;
  // }
}
