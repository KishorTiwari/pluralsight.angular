import { Injectable } from '@angular/core';
import { HeaderService } from './header.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { retry, catchError } from 'rxjs/operators';
import {AppConstant} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private _httpClient: HttpClient, private _header: HeaderService) { 
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  getUserProperties(userId:number): Observable<HttpResponse<Contact[]>>{
    let url = AppConstant.appUrl + '/api/property/user/' + userId;
    let headers: HttpHeaders = this._header.getAuthHeader();
    return this._httpClient.get<Contact[]>(url, {observe: 'response', headers: headers}).pipe(
      retry(3), //retry 3 times
      catchError(this.handleError)
    );
  }
}
