using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Uber_Flights.Models
{
    public class Flight
    {
        public int flightID { get; set; }
        public string FlightNumber { get; set; }
        public string Destination { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string DepartureAirport { get; set; }
        public string ArrivalAirport { get; set; }
        public int MaxCapacity { get; set; }
        public int PassengerID { get; set; }

        //Count of all passengers on the flight to be used with MaxCapacity
        public int PassengerCount => BookedPassengers?.Count ?? 0;

        //Collection of passengers that would be on a particular flight
        public virtual ICollection<Passenger> BookedPassengers { get; set; }







   
    }
}