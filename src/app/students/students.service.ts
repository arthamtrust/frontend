import { Injectable } from "@angular/core";
import { Databases } from "appwrite";

import { from, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Appwrite } from "../api/appwrite";
import { Student } from "./student.type";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  db: Databases;

  constructor() {
    this.db = Appwrite.database();
  }

  getStudentsList() {
    return from(
      this.db.listDocuments<Student>(
        environment.DATABASE.ID,
        environment.DATABASE.STUDENTS
      )
    ).pipe(
      map((res) => res.documents),
      catchError(this.handleError("getStudentsList", []))
    );
  }

  getStudent(id: number): Observable<Student> {
    return from(
      this.db.getDocument<Student>(
        environment.DATABASE.ID,
        environment.DATABASE.STUDENTS,
        String(id)
      )
    ).pipe(catchError(this.handleError<Student>(`getStudent id=${id}`)));
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
