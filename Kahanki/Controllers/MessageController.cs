using Kahanki.Data;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kahanki.Controllers;

public class MessageController : BaseController<Message>
{
    public MessageController(ApplicationDbContext db) : base(db)
    {
    }

    [HttpGet]
    public List<Message> GetAllForChat(Guid chatId)
    {
        return new List<Message>();
    }
}