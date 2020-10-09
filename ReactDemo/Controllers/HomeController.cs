using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;
using System.Collections.Generic;

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro11",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment from controller.."
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke from controller",
                    Text = "This is *another* comment"
                },
            };
        }
        public IActionResult Index()
        {
            return View();
        }

        [Route("comments")]
        //[ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments);
        }

        public IActionResult IndexNew()
        {
            return View();
        }

        public JsonResult GetMessageNew()
        {
            return new JsonResult("Hello World. Test I am from  server-side from controller");
            //return new JsonResult { Data = "Hello World. I am from controller", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public JsonResult getmessage()
        {
            //return Json(new { Data = "Hello World. I am from  server-side from controller" });
            return new JsonResult("Hello World. I am from  server-side from controller");
        }
    }
}