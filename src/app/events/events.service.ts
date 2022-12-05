import { Injectable } from "@angular/core";
import { API_URL } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { Event, EventSidebar } from "./events.type";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_URL}/events`;
  }

  getEventsList(): Observable<Event[]> {
    return this.http
      .get<Event[]>(this.url)
      .pipe(catchError(this.handleError<Event[]>("getEventList", [])));
  }

  getEventsSidebar(): Observable<EventSidebar[]> {
    const url = `${this.url}/sidebar`;

    return this.http
      .get<EventSidebar[]>(url)
      .pipe(
        catchError(this.handleError<EventSidebar[]>(`getEventSidebar`, []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
