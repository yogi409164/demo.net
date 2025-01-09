using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Static user data for demonstration purposes (in-memory storage)
        private static readonly List<User> users = new List<User>();

        // Static valid credentials for login
        private static readonly string validEmail = "demo";
        private static readonly string validPassword = "1234";

        // Sign In API
        [HttpPost("SignIn")]
        public IActionResult SignIn([FromBody] User signInRequest)
        {
            if (signInRequest == null || string.IsNullOrEmpty(signInRequest.Email) || string.IsNullOrEmpty(signInRequest.Password))
            {
                return BadRequest("Invalid input.");
            }

            // Check if the email and password match the static credentials
            if (signInRequest.Email == validEmail && signInRequest.Password == validPassword)
            {
                HttpContext.Session.SetString("UserEmail", signInRequest.Email);
                return Ok("Login successful.");

            }
            else
            {
                return Unauthorized("Invalid email or password.");
            }
        }

        // Sign Up API
        [HttpPost("SignUp")]
        public IActionResult SignUp([FromBody] User signUpRequest)
        {
            if (signUpRequest == null || string.IsNullOrEmpty(signUpRequest.Email) || string.IsNullOrEmpty(signUpRequest.Password))
            {
                return BadRequest("Email and Password are required.");
            }

            // Check if the email already exists in the list of users
            var existingUser = users.Find(user => user.Email.ToLower() == signUpRequest.Email.ToLower());
            if (existingUser != null)
            {
                return Conflict("Email is already taken.");
            }
            HttpContext.Session.SetString("UserEmail", signUpRequest.Email);
            // Add the new user to the list (In a real app, save to a database)
            users.Add(signUpRequest);

            return Ok("Sign Up successful.");
        }
    }

    // User model
    public class User
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
