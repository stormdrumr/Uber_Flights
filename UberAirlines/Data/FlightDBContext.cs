using UberAirlines.Models;

using Microsoft.EntityFrameworkCore;

namespace UberAirlines.Data
{
    public class FlightDBContext : DbContext
    {
        public FlightDBContext(DbContextOptions<FlightDBContext> op) : base(op)
        {

        }
        public DbSet<Flight> Flights { get; set; }
    }
}
