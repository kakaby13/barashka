using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kahanki.Controllers;

public class MessageController : BaseController<Message>
{
    [HttpGet]
    public List<Message> GetAllForChat(Guid chatId)
    {
        return new List<Message>();
    }
}