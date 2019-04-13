import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Contributor, ContributorSidebar } from './contributor.type';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_URL}/contributors`;
  }

  getContributors(
    year: number = null,
    month: number = null,
  ): Observable<Contributor> {
    if (year && month) {
      this.url = `${this.url}/${year}/${month}`;
    }

    return this.http
      .get<Contributor>(this.url)
      .pipe(catchError(this.handleError<Contributor>('getContributors')));
  }

  getContributorsSidebar(): Observable<ContributorSidebar[]> {
    const url = `${this.url}/sidebar`;

    return this.http
      .get<ContributorSidebar[]>(url)
      .pipe(
        catchError(
          this.handleError<ContributorSidebar[]>(`getContributorSidebar`, []),
        ),
      );
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
