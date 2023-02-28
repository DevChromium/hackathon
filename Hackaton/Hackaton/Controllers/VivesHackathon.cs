using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace Hackaton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

   
    public class VivesHackathon : ControllerBase
    {
        [HttpGet(Name = "getStudent")]

        public String Get()
        {
            return "Gilles";
        }
    }
}
