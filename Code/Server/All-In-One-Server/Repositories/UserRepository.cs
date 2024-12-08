using All_In_One_Server.Models;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace All_In_One_Server.Repositories
{
    public class UserRepository
    {
        public UserRepository()
        {

        }

        public List<User> GetAllUsersFromDatabase()
        {
            List<User> users = new List<User>();

            try
            {
                string currentDirectory = Directory.GetCurrentDirectory();
                var combinedPath = Path.Combine(currentDirectory, "users.json");
                UserWrapper? usersWrap = JsonConvert.DeserializeObject<UserWrapper>(File.ReadAllText(combinedPath));
                users = usersWrap.Users;
                Console.WriteLine(currentDirectory);
                return users;
               
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return users;
           
        }
    }
}
