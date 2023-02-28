using Hackaton.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace Hackaton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class VivesHackathon : ControllerBase
    {
       
        Models.StudentItem student = new Models.StudentItem();
        [HttpGet(Name = "getStudent")]
        public ActionResult<StudentItem> getStudent()
        {
            return student;
            
        }
    }
}
