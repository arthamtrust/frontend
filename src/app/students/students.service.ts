import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { API_URL } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Student } from "./student.type";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_URL}/students`;
  }

  getStudentsList(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.url)
      .pipe(catchError(this.handleError<Student[]>("getStudentsList", [])));
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;

    return this.http
      .get<Student>(url)
      .pipe(catchError(this.handleError<Student>(`getStudent id=${id}`)));
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
