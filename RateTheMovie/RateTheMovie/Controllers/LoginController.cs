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
        public IActionResult ProcessLogin(UserModel userModel)
        {
            SecurityService securityService = new SecurityService(); 

            if (securityService.IsValid(userModel))
            {
                return View("Home", userModel);
            }
            else
            {
                return View("Login");
            }
        }
    }
}
