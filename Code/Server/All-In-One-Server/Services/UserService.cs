using All_In_One_Server.Models;
using All_In_One_Server.Repositories;

namespace All_In_One_Server.Services
{
    public class UserService
    {
        public UserService()
        {
                
        }

        public List<User> GetAllUsers()
        {
            UserRepository userRepository = new UserRepository();
            return userRepository.GetAllUsersFromDatabase();
        }
    }
}
