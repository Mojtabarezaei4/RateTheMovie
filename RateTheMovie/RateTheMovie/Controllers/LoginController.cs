using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RateTheMovie.Data;
using RateTheMovie.Models;
using RateTheMovie.Services;
using RateTheMovie.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Controllers
{
    public class LoginController : Controller
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<ApplicationIdentetyUser> _userManager;

        public LoginController(ApplicationDbContext dbContext, UserManager<ApplicationIdentetyUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }
        public IActionResult Index()
        {
            return View();
        }

        // The login process
        [HttpPost]
        public async Task<IActionResult> ProcessLogin([FromBody]UserModel userModel)
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
            var user = _dbContext.Users.FirstOrDefault(u => u.Email == userModel.UserEmail);
            var result = await _userManager.CheckPasswordAsync(user, userModel.Password);
        }
    }
}
