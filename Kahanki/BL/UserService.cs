using Kahanki.Data;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Kahanki.BL
{
    public class UserService : IUserService{
        private readonly ApplicationDbContext _dbContext;

        public UserService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public UserSetting GetSettingsByUserId(Guid userId)
        {
            return _dbContext.AppUsers
                .Include(c => c.UserSetting)
                .Single(c => c.Id == userId.ToString()).UserSetting;
        }
    }
}