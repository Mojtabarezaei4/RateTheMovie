using Microsoft.AspNetCore.Mvc;
using RateTheMovie.Data;
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
        public IActionResult Register()
        {
            return Ok("success");
        }
    }
}
