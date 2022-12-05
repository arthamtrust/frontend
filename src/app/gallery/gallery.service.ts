import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Gallery } from "./gallery.type";
import { API_URL } from "src/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_URL}/gallery`;
  }

  getGalleries(): Observable<Gallery[]> {
    return this.http
      .get<Gallery[]>(this.url)
      .pipe(catchError(this.handleError<Gallery[]>("getGalleries", [])));
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
