import {IController} from 'angular';
import {IEvent} from '../../../../index';

export class CalendarFormController implements IController {
  public content: string;
  public onCreated: (event: IEvent) => void;
  public timestamp: string;
  public title: string;

  constructor() {
    'ngInject';
  }

  public createEvent() {
    this.onCreated({
      content: this.content,
      timestamp: this.timestamp,
      title: this.title
    });
    this.reset();
  }

  public reset() {
    this.content = '';
    this.timestamp = '';
    this.title = '';
  }
}
