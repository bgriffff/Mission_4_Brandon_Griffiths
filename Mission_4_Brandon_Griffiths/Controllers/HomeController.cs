using Microsoft.AspNetCore.Mvc;

namespace Mission_4_Brandon_Griffiths.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GradeCalculator()
        {
            return View();
        }
    }
}
