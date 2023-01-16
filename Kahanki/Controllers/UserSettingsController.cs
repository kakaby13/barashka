using Kahanki.BL;
using Kahanki.Data;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kahanki.Controllers;

public class UserSettingsController : BaseController<UserSetting>
{
    private readonly IUserService _userService;

    public UserSettingsController(ApplicationDbContext db, IUserService userService) : base(db)
    {
        _userService = userService;
    }

    [HttpGet]
    public UserSetting GetSettingsByUserId([FromQuery] Guid userId)
    {
        return _userService.GetSettingsByUserId(userId);
    }

}