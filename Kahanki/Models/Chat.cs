namespace Kahanki.Models;

public class Chat : IEntity
{
    public Guid Id { get; set; }

    public List<ApplicationUser> Users { get; set; }

    public List<Message> Messages { get; set; }
}