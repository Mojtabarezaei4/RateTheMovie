using Microsoft.AspNetCore.Mvc;
using RateTheMovie.Data;
using RateTheMovie.DataTransfermObjects;
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
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
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
    }
}
