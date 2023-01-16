using Kahanki.Data;
using Kahanki.Models;

namespace Kahanki.BL
{
    public class CoupleService : ICoupleService
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public CoupleService(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public IEnumerable<Couple> GetCouplesByUserId(Guid userId)
        {
            var user = _applicationDbContext.AppUsers.Single(c => c.Id == userId.ToString());

            return _applicationDbContext.Couples
                .Where(c => c.Users.Contains(user))
                .ToList();
        }



        public void TryCreateCouple(Swap swap)
        {
            if (swap.SwapType is not (SwapType.Like or SwapType.SuperLike))
            {
                return;
            }

            var liked = _applicationDbContext.AppUsers.Single(c => c.Id == swap.UserLikedId.ToString());
            var liking = _applicationDbContext.AppUsers.Single(c => c.Id == swap.UserLinkingId.ToString());

            var result =
                _applicationDbContext.Swaps.Any(c =>
                    c.UserLikedId.ToString() == liking.Id &&
                    c.UserLinkingId.ToString() == liked.Id &&
                    (c.SwapType == SwapType.Like || c.SwapType == SwapType.SuperLike));

            if (result)
            {
                _applicationDbContext.Couples.Add(new Couple
                {
                    Users = new List<ApplicationUser>
                    {
                        liked,
                        liking
                    }
                });

                _applicationDbContext.SaveChanges();
            }
        }
    }
}
