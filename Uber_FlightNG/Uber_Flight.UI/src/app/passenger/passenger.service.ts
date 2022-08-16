import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PassengerDef } from './passenger-def';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private passengerUrl = 'https://localhost:7281/api/Passengers';

passTestData: PassengerDef[] = [{"passengerID": 1, "firstName": "Peter", "lastName": "Diddy", "email": "pdiddy@testing.com"}];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<PassengerDef[]> {
    return new Observable<PassengerDef[]>(ob => {
    ob.next(this.passTestData);
    });
  }
}
