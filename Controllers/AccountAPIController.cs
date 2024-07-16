using Ecommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class AccountAPIController : Controller
    {

        //AccountAPI/VerifyUser?UserName=Fagun&Password=123456
        [HttpPost]
        public IActionResult VerifyUser(Account ModelAccount)
        {
            if (ModelAccount.UserName == "Fagun" && ModelAccount.Password == "123456")
            {
                return Ok("Successfully Authorized");
            }

            else return Unauthorized(new { Message = "Unauth access" });

        }
    }
}

