namespace Kahanki.Models;

public class Message : IEntity
{
    public Guid Id { get; set; }

    public string Text { get; set; }
    public DateTime SendDate { get; set; }

    public ApplicationUser User { get; set; }
}