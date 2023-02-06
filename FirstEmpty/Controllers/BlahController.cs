using FirstEmpty.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstEmpty.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            //throw new IndexOutOfRangeException();
            return View();
        }

        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator (GradeCalcModel model)
        {
            return View();
        }
    }
}
