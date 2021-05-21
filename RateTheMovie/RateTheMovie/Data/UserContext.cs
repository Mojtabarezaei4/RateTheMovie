using Microsoft.EntityFrameworkCore;
using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }
        
        public DbSet<UserModel> Users { set; get; }
    }
}
