using Kahanki.BL;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kahanki.Controllers;

public class DateController : Controller
{
    private readonly ICandidateService _candidateService;

    public DateController(ICandidateService candidateService)
    {
        _candidateService = candidateService;
    }

    [HttpGet]
    public ApplicationUser GetCandidate(Guid userId)
    {
        return _candidateService.GetCandidate(userId);
    }

    [HttpPost]
    public void ProcessSwape([FromBody]Swap swap)
    {
        _candidateService.ProcessSwap(swap);
    }
}