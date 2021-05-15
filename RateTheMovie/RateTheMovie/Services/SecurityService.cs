using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Services
{
    // The class has the job to authenticate user
    public class SecurityService
    {
        UsersDAO usersDAO = new UsersDAO();
        public SecurityService()
        {
            
        }

        public bool IsValid(UserModel user)
        {
            // return true if the user is valid
            return usersDAO.FindUserByEmailAndPassword(user);
        }
    }
}
