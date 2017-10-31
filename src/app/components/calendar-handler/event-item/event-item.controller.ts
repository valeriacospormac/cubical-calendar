import {IController} from 'angular';

export class EventItemController implements IController {
  public content: string;
  public timestamp: string;
  public title: string;

  constructor() {
    'ngInject';
  }
}
