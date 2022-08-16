import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { PassengerDef } from '../passenger-def';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

pDefs: PassengerDef[] = [];

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.loadPassengers();
  }

loadPassengers():void {
  this.passengerService.getPassengers().subscribe(pDefs => this.pDefs = pDefs);
}

}
