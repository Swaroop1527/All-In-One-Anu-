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
        public UserController()
        {
                
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetAllUsers()
        {

            try
            {
                UserService userService = new UserService();
                var result  = userService.GetAllUsers();
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

            }
            catch (Exception ex)
            {

            }
            return BadRequest(users);
        }
    }
}
