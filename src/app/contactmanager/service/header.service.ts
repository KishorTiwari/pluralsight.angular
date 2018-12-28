import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private _httpClient: HttpClient) { }

  getAuthHeader(): HttpHeaders{
    var token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVXNlckVtYWlsIjoibGFtZ2FkZWthbWFsQGdtYWlsLmNvbSIsImp0aSI6IjZmOWNmNWI3LTE5MmMtNDdhOC04OTI0LTZlMWE1NDhiNDE0NyIsImV4cCI6MTU1NDY4NjQ4MSwiaXNzIjoiaHR0cHM6Ly9maW5kbWVhcm9vbS5jb20ubnAiLCJhdWQiOiJodHRwczovL2ZpbmRtZWFyb29tLmNvbS5ucCJ9.iNM8MC6hFHmkvx4pS2RFvHBCrg1LKphwWCDDFyJEuHk';
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    });
    return headers;
  }
}
