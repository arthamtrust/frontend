import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './student.type';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudentsList(): Observable<Student[]> {
    const url = `${API_URL}/students`;

    return this.http
      .get<Student[]>(url)
      .pipe(catchError(this.handleError<Student[]>('getStudentsList', [])));
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
