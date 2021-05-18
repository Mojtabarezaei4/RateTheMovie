using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace RateTheMovie.Data.Models
{
    public class ApplicationIdentetyUser: IdentityUser
    {
        public IList<Post> Posts { get; set; }
    }
}
