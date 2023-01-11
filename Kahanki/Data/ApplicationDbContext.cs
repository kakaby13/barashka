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

        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
    }
}