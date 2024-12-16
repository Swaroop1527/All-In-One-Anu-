using All_In_One_Server.DataDB;
using All_In_One_Server.Models;
using Newtonsoft.Json;
using System;
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
                using (AllDbContext db = new AllDbContext())
                {
                    db.Database.EnsureDeleted();
                    db.Database.EnsureCreated();
                    return db.Users.ToList();
                }
                //string currentDirectory = Directory.GetCurrentDirectory();
                //var combinedPath = Path.Combine(currentDirectory, "users.json");
                //UserWrapper? usersWrap = JsonConvert.DeserializeObject<UserWrapper>(File.ReadAllText(combinedPath));
                //users = usersWrap.Users;
                //Console.WriteLine(currentDirectory);
                //return users;

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
                using (var dbContext = new AllDbContext())
                {
                    dbContext.Database.EnsureDeleted();
                    dbContext.Database.EnsureCreated();
                    List<User> existingUsers = dbContext.Users.ToList();

                    foreach (var newUser in newUsers)
                    {
                        if (!existingUsers.Any(user => user.Id == newUser.Id))
                        {
                            dbContext.Users.Add(newUser);
                        }
                    }
                    dbContext.SaveChanges();
                }

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
