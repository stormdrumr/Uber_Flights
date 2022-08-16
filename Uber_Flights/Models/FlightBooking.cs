using Uber_Flights.Data;

namespace Uber_Flights.Models
{
    public class FlightBooking
    {
        public Passenger Passenger { get; set; }
        public Flight Flight { get; set; }

        public virtual ICollection<Flight> reservationNum { get; set; }

    }
}
