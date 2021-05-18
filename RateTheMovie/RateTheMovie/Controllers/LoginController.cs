using Microsoft.AspNetCore.Mvc;
using RateTheMovie.Models;
using RateTheMovie.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // The login process
        [HttpPost]
        public IActionResult ProcessLogin([FromBody]UserModel userModel)
        {
            SecurityService securityService = new SecurityService(); 

            if (securityService.IsValid(userModel))
            {
                return Ok(userModel);
            }
            else
            {
                return BadRequest("Not able to authenticate!!!");
            }
        }
    }
}
