using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Cheakout()
        {
            return View();
        }

        //public IActionResult SingleProduct()
        //{
        //    return View();
        //}

        public IActionResult SingleProduct(int id)
        {
            ViewBag.ProductId = id;
            return View();
        }

        public IActionResult CategoryProduct()
        {

            return View();
        }
    }
}
