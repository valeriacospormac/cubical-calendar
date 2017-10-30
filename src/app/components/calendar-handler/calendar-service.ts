import {ICalendarService, IEvent} from '../../../index';

export class CalendarHandlerService implements ICalendarService {

  constructor(public localStorageService) {
    'ngInject';
    this.setEvents = this.setEvents.bind(this);
  }
  public setEvents(events: IEvent[]) {
    this.localStorageService.set('events', events);
  }

  public getEvents() {
    return this.localStorageService.get('events') || [];
  }
}
