using All_In_One_Server.Models;
using All_In_One_Server.Repositories;

namespace All_In_One_Server.Services
{
    public class UserService
    {
        private readonly UserRepository userRepository;
        public UserService()
        {
            userRepository = new UserRepository();
        }

        public List<User> GetAllUsers()
        {
            
            return userRepository.GetAllUsersFromDatabase();
        }

        public bool SaveUsers(List<User> newUsers)
        {
           return  userRepository.SaveAllUsersDatabase(newUsers);
        }
    }

}
