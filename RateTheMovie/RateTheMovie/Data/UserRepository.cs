using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _context;

        public UserRepository(UserContext context)
        {
            _context = context; 
        }

        // Craetign a user by using dependency-injection from UserContext.
        public UserModel Create(UserModel userModel)
        {
            _context.Users.Add(userModel);
            userModel.Id = _context.SaveChanges();

            return userModel;
        }
    }
}
