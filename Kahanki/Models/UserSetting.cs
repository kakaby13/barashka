namespace Kahanki.Models
{
    public class UserSetting : IEntity
    {
        public Guid UserId { get; set; }

        //public Guid ApplicationUserId { get; set; }

        //public ApplicationUser ApplicationUser { get; set; }

        public Guid Id { get; set; }

        public Sex LookFor { get; set; }

        public Sex Sex { get; set; }

        //public SexualOrientation Orientation { get; set; }

        //public Zodiac Zodiac { get; set; }
    }
}