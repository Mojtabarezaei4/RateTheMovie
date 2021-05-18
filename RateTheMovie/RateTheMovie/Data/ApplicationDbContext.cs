using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RateTheMovie.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Data
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationIdentetyUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Post>()
                .HasOne(c => c.Poster)
                .WithMany(c => c.Posts);

            base.OnModelCreating(builder);
        }

        public DbSet<Post> Posts { get; set; }
    }
}
