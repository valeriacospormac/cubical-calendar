import {IController} from 'angular';
import {ICalendarService, IEvent} from '../../../index';

export class CalendarHandlerController implements IController {
 public events: IEvent[];

  constructor(public calendarService: ICalendarService) {
    'ngInject';
    this.onCreated = this.onCreated.bind(this);
  }

  public $onInit() {
    this.events = this.calendarService.getEvents();
  }
  public onCreated(event: IEvent) {
    this.events.push(event);
    this.calendarService.setEvents(this.events);
  }
}