import { Component, OnInit } from '@angular/core';
import { FlightDef } from '../flight-def';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  fDefs: FlightDef[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

loadFlights() : void {
  this.flightService.getFlights().subscribe(fDefs => this.fDefs = fDefs)
}

}
