using Kahanki.Data;
using Kahanki.Models;

namespace Kahanki.BL
{
    public class ChatService : IChatService
    {
        private readonly ApplicationDbContext _dbContext;

        public ChatService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Message> GetAllForChat(Guid chatId)
        {
            return _dbContext.Chats.First(r => r.Id == chatId).Messages;
        }
    }
}
