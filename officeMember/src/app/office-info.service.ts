import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeInfoService{

  private _data: BehaviorSubject<any> = new BehaviorSubject(null);
  public data$  = this._data.asObservable();

  private baseUrl: string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  fetchAPI(): void {
    this.http.get<any>(this.baseUrl)
      .pipe(
        tap(
          response => this._data.next(response.data),
          error => console.log("error message", error),
        )
      )
      .subscribe();
  }


}
