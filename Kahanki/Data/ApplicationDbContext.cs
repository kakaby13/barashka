using Duende.IdentityServer.EntityFramework.Options;
using Kahanki.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Kahanki.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<ApplicationUser> AppUsers { get; set; } = null!;
        
        public DbSet<Swap> Swaps { get; set; } = null!;
        
        public DbSet<UserSetting> UserSettings { get; set; } = null!;

        public DbSet<Couple> Couples { get; set; } = null!;

        public DbSet<Message> Messages { get; set; } = null!;

        public DbSet<Chat> Chats { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<ApplicationUser>()
            //    .HasOne(b => b.UserSetting)
            //    .WithOne(i => i.ApplicationUser)
            //    .HasForeignKey<UserSetting>(b => b.ApplicationUserId);
            
        }


        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
    }
}