import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FlightDef } from './flight-def';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flightUrl = 'https://localhost:7281/api/Flights';

  testData: FlightDef[] = [{"flightID": 1, "flightNumber": "AA7352", "destination": "Miami, FL", "departureAirport": "MCO", "departureTime": "12:00PM EST 08-22-2022", "arrivalAirport": "MIA", "arrivalTime": "2:10PM EST 08-22-2022", "maxCapacity": 145}];
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getFlights(): Observable<FlightDef[]> {
    return new Observable<FlightDef[]>(ob => {
    ob.next(this.testData);
    });
  }
}
