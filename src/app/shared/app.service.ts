import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private router: Router, private http: HttpClient) { }
    /**
   * @brief      function for getting the list
   *
   * @param      url      The requested url
   *
   * @return     list of data
   */
  getBooksList(url: string): Observable<any> {
    return this.http.get(url);
  }
}
