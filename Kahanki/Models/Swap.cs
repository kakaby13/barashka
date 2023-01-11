namespace Kahanki.Models
{
    public class Swap : IEntity
    {
        public Guid Id { get; set; }

        public Guid UserLinkingId { get; set; }

        public Guid UserLikedId { get; set; }

        public SwapType SwapType { get; set; }

        //User UserLiking { get; set; }
        //User UserLiked { get; set; }
        //public DateTimeOffset Date { get; set; }
        //public long SwapTypeId { get; set; }
        //public SwapType SwapType { get; set; }
    }
}
