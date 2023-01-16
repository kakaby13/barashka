using Microsoft.AspNetCore.Identity;

namespace Kahanki.Models
{
    public class ApplicationUser : IdentityUser
    {
        public List<Couple> Couples { get; set; }

        public UserSetting UserSetting { get; set; } = new UserSetting();

        public List<Chat> Chats { get; set; }

        public override bool EmailConfirmed { get; set; } = true;

    }
}