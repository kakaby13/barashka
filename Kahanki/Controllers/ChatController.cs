using Kahanki.Data;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kahanki.Controllers;

//[ApiController]
//[Route("[controller]")]
public class ChatController : BaseController<Chat>
{
    [HttpGet]
    public List<Chat> GetAllChatsByUserId()
    {
        return new List<Chat>
        {
            new Chat
            {
                Id = new Guid(),
                Messages = new List<Message> { },
                Users = new List<ApplicationUser>()
            },
            new Chat
            {
                Id = new Guid(),
                Messages = new List<Message> { },
                Users = new List<ApplicationUser>()
            },
            new Chat
            {
                Id = new Guid(),
                Messages = new List<Message> { },
                Users = new List<ApplicationUser>()
            }
        };
    }

    public ChatController(ApplicationDbContext db) : base(db)
    {
    }
}