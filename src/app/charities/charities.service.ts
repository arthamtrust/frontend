import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import { Charity } from './charity.type';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharitiesService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_URL}/charity`;
  }

  getCharitiesList(): Observable<Charity[]> {
    return this.http
      .get<Charity[]>(this.url)
      .pipe(catchError(this.handleError<Charity[]>('getCharityList', [])));
  }

  getCharity(id: number): Observable<Charity> {
    const url = `${this.url}/${id}`;

    return this.http
      .get<Charity>(url)
      .pipe(catchError(this.handleError<Charity>(`getCharity id=${id}`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
