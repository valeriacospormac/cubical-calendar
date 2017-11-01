import {IController} from 'angular';
import {IEvent} from '../../../../index';

export class EventItemController implements IController {
  public eventItem: {
    content: string,
    timestamp: string,
    title: string
  };
  public onEdited: (eventItem: IEvent) => void;

  constructor() {
    'ngInject';
  }

  public editEvent() {
    this.onEdited(this.eventItem);
  }
}
