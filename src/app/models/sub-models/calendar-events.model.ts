export interface CalendarEvent {
  imageUrl?: string
  title: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  time?: string;
  description: string;
  type?: string;
  featured?: boolean;
}
