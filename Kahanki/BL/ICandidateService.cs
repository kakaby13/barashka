using Kahanki.Models;

namespace Kahanki.BL;

public interface ICandidateService
{
    public ApplicationUser GetCandidate(Guid userId);

    public ApplicationUser ProcessSwap(Swap swap);


}