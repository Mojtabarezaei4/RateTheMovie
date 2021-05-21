using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Data
{
    public interface IUserRepository
    {
        public UserModel Create(UserModel userModel);
        public UserModel GetByEmail(string email);
        public UserModel GetById(int id);
    }
}
