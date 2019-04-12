export interface Event {
  id: number;
  title: string;
  content: string;
  published_date: string;
  created_date: string;
}

export interface EventSidebar {
  year: string;
  months: string[];
}
