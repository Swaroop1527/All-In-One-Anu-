using All_In_One_Server.Models;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace All_In_One_Server.Repositories
{
    public class UserRepository
    {
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

        public bool SaveAllUsersDatabase(List<User> newUsers)
        {
            try
            {
                List<User> existingUsers = GetAllUsersFromDatabase();
                foreach (var newUser in newUsers)
                {
                    if (!existingUsers.Any(user => user.Id == newUser.Id))
                    {
                        existingUsers.Add(newUser);
                    }
                }

                string currentDirectory = Directory.GetCurrentDirectory();
                var combinedPath = Path.Combine(currentDirectory, "users.json");
                var updatedUsersWrap = new UserWrapper { Users = existingUsers };
                File.WriteAllText(combinedPath, JsonConvert.SerializeObject(updatedUsersWrap, Formatting.Indented));

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }

    }
}
