namespace Kahanki.Models
{
    public class UserSetting : IEntity
    {
        public Guid UserId { get; set; }

        public ApplicationUser User { get; set; }

        public Guid Id { get; set; }
    }
}