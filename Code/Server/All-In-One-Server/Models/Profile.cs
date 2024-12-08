using System.Security.Cryptography.Xml;

namespace All_In_One_Server.Models
{
    public class Profile
    {
        public string FullName { get; set; }
        public string Phone { get; set; }
        public Preferences Preferences { get; set; }
        public List<BookingHistory> BookingHistory { get; set; }
    }

}
