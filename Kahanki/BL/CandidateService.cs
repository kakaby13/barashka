using Kahanki.Data;
using Kahanki.Models;

namespace Kahanki.BL
{
    public class CandidateService : ICandidateService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly ICoupleService _coupleService;

        public CandidateService(ApplicationDbContext applicationDbContext, ICoupleService coupleService)
        {
            _dbContext = applicationDbContext;
            _coupleService = coupleService;
        }


        public ApplicationUser GetCandidate(Guid userId)
        {
            var user = _dbContext.Users.Single(r => r.Id == userId);

            var userSettings = _dbContext.UserSettings.Single(r => r.UserId == userId);

            var likedUsersIds = _dbContext.Swaps.Where(r => r.UserLinkingId == user.Id).Select(r => r.UserLikedId).ToList();
            var candidates = _dbContext.Users
                .Where(r => !likedUsersIds.Contains(r.Id))
                .Where(c => c.UserSetting.LookFor == userSettings.Sex).ToList();

            return candidates.Skip(new Random().Next(0, candidates.Count)).First();

        }

        public ApplicationUser ProcessSwap(Swap swap)
        {
            _dbContext.Swaps.Add(swap);
            _dbContext.SaveChanges();

            _coupleService.TryCreateCouple(swap);

            return GetCandidate(swap.UserLinkingId);
        }
    }
}
