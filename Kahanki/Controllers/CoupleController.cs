using Kahanki.Data;
using Kahanki.Models;

namespace Kahanki.Controllers;

public class CoupleController : BaseController<Couple>
{
    public CoupleController(ApplicationDbContext db) : base(db)
    {
    }
}