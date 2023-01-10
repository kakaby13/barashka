using Microsoft.AspNetCore.Identity;

namespace Kahanki.Models
{
    public class ApplicationUser : IdentityUser, IEntity
    {
        public Guid Id { get; set; }

        public override bool EmailConfirmed { get; set; } = true;

    }
}