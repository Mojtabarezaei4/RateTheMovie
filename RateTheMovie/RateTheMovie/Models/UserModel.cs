﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string UserEmail { get; set; }

        public string Password { get; set; }
    }
}