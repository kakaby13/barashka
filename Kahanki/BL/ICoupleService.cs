using Kahanki.Models;

namespace Kahanki.BL;

public interface ICoupleService
{
    public IEnumerable<Couple> GetCouplesByUserId(Guid userId);

    public void TryCreateCouple(Swap swap);
}