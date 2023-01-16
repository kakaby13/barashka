using Kahanki.Models;

namespace Kahanki.BL;

public interface IUserService
{
    public UserSetting GetSettingsByUserId(Guid userId);

}