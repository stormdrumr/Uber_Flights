import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public newFlightForm: FormGroup, private router: Router) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      flightNumber: new FormControl ("", Validators.required),
      destination: new FormControl("", Validators.required),
      departureAirport: new FormControl("", Validators.required),
      departureTime: new FormControl("", Validators.required),
      arrivalAirport: new FormControl("", Validators.required),
      arrivalTime: new FormControl("", Validators.required),
      maxCapacity: new FormControl("", Validators.required)
    })
  }

  get nFF () {return this.newFlightForm.controls;}

  submit(){
    console.log(this.newFlightForm.value);
    console.log(this.newFlightForm.valid);
    console.log("The new flight was created successfully.");
  }
}
