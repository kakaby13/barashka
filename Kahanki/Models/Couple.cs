namespace Kahanki.Models;

public class Couple : IEntity
{
    public Guid Id { get; set; }

    public List<ApplicationUser> Users { get; set; }
}