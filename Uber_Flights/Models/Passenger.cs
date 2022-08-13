using Uber_Flights.Data;

namespace Uber_Flights.Models
{
    public class Passenger
    {
        public int passengerID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }

        public virtual ICollection<Flight> reservationNum { get; set; }
        
    }
}
