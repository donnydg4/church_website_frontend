export interface CalendarEvent {
  imageUrl?: string
  title: string;
  date?: Date;
  location?: string;
  time?: string;
  description: string;
  type?: string;
  featured?: boolean;
}
