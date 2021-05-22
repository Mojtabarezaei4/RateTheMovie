using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.DataTransfermObjects
{
    public class LoginDto
    {
        public string Name { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
    }
}
