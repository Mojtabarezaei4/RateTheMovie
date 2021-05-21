using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : Controller
    {
        public IActionResult Hello()
        {
            return Ok("success");
        }
    }
}
