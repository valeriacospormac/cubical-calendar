export const moduleName: string;

export interface IEvent {
  timestamp: string;
  title: string;
  content: string;
}

export interface ICalendarService {
  setEvents(events: IEvent[]);
  getEvents(): IEvent[];
}
