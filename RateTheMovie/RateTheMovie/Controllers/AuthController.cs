using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RateTheMovie.Data;
using RateTheMovie.DataTransfermObjects;
using RateTheMovie.Helpers;
using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        // The method and the endpoint.
        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            // geting the variables from the form.
            var userModel = new UserModel
            {
                UserEmail = dto.UserEmail,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };
            // Creating a user and returning it.
            return Created("success", _repository.Create(userModel));
        }

        // The validation for login.
        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _repository.GetByEmail(dto.UserEmail);

            if (user == null) return BadRequest(new {message = "Invalid Credentials"});

            if(!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            // Generating jwt
            var jwt = _jwtService.Generate(user.Id);

            // Setting the jwt to the cookies
            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new
            {
                message = "Success!"
            });
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                // Geting cookie
                var jwt = Request.Cookies["jwt"];

                // Validation of the cookie
                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                // Qeurying the cookie
                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch (Exception e)
            {
                return Unauthorized();
            }

        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "You loged out!"
            });
        }
    }
}
