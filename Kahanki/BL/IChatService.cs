using Kahanki.Models;

namespace Kahanki.BL;

public interface IChatService
{
    public List<Message> GetAllForChat(Guid chatId);
}