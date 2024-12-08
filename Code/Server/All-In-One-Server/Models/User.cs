using static System.Runtime.InteropServices.JavaScript.JSType;

namespace All_In_One_Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Profile Profile { get; set; }
    }

}
