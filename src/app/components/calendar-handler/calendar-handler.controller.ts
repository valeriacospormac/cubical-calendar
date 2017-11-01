import {IController} from 'angular';
import {ICalendarService, IEvent} from '../../../index';

export class CalendarHandlerController implements IController {
 public events: IEvent[];

  constructor(public calendarService: ICalendarService) {
    'ngInject';
    this.onCreated = this.onCreated.bind(this);
    this.onDeleted = this.onDeleted.bind(this);
    this.onEdited = this.onEdited.bind(this);
  }

  public $onInit() {
    this.events = this.calendarService.getEvents();
  }
  public onCreated(event: IEvent) {
    this.events.push(event);
    this.calendarService.setEvents(this.events);
  }
  public onEdited(eventItem: IEvent) {
    this.calendarService.setEvents(this.events);
  }
  public onDeleted(eventItem: IEvent) {
    const indexOfEvent = this.events.findIndex(e => e.timestamp === eventItem.timestamp);
    this.events.splice(indexOfEvent, 1);
    this.calendarService.setEvents(this.events);
  }
}
