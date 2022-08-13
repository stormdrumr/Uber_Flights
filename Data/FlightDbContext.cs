
using Microsoft.EntityFrameworkCore;
using Uber_Flights.Models;

namespace Uber_Flights.Data
{ 
    public class FlightDbContext : DbContext
    {
        public FlightDbContext(DbContextOptions<FlightDbContext> op) : base(op)
        {

        }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }


        //protected override void OnModelCreating(ModelBuilder builder)
        //{
          

        //}
    }
}
