using All_In_One_Server.Models;
using Microsoft.EntityFrameworkCore;

namespace All_In_One_Server.DataDB
{
    public class AllDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<BookingHistory> BookingHistories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localDb)\\All-In-One;Database=myDataBase;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure one-to-many relationship without circular dependency
            modelBuilder.Entity<BookingHistory>()
                .HasOne<User>() // No navigation property in BookingHistory
                .WithMany(u => u.Bookings) // Navigation property in User
                .HasForeignKey(bh => bh.UserId); // Foreign key in BookingHistory

            // Configure Users table to accept explicit Id
            modelBuilder.Entity<User>()
                .Property(u => u.Id)
                .ValueGeneratedNever(); // Explicitly specify that Id is not auto-generated

            // Configure BookingHistories table to accept explicit Id
            modelBuilder.Entity<BookingHistory>()
                .Property(bh => bh.Id)
                .ValueGeneratedNever(); // Explicitly specify that Id is not auto-generated
        }
    }
}
