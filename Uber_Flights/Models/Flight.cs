using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Uber_Flights.Models
{
    public class Flight
    {
        public int flightID { get; set; }
        public string flightNumber { get; set; }
        public string destination { get; set; }
        public DateTime departureTime { get; set; }
        public DateTime arrivalTime { get; set; }
        public string departureAirport { get; set; }
        public string arrivalAirport { get; set; }
        public int maxCapacity { get; set; }

        //Count of all passengers on the flight to be used with MaxCapacity
        public int passengerCount => bookedPassengers?.Count ?? 0;

        //Collection of passengers that would be on a particular flight
        public virtual ICollection<Passenger> bookedPassengers { get; set; }







   
    }
}