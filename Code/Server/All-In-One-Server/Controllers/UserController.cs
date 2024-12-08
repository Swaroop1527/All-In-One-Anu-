using All_In_One_Server.Models;
using All_In_One_Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace All_In_One_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        public UserController()
        {
            _userService = new UserService();
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetAllUsers()
        {

            try
            {
                var result  = _userService.GetAllUsers();
                if (result != null)
                {
                    return Ok(result);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return Ok("No Users");
        }

        [HttpPost]
        [Route("SaveUser")]
        public IActionResult SaveResults([FromBody] List<User> users)
        {
            try
            {
                var result = _userService.SaveUsers(users);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"{ex.Message}"); 
            }
            return BadRequest("save user failed to DB");
        }
    }
}
