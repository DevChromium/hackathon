using Hackaton.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Reflection.Metadata.Ecma335;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using System.Text;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Caching.Memory;

namespace Hackaton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class VivesHackathon : ControllerBase
    {
        private readonly HttpClient httpClient;

        public VivesHackathon()
        {
            httpClient = new HttpClient();
        }

        [HttpGet(Name = "getStudent")]
        public ActionResult<IEnumerable<StudentItem>> GetStudents()
        {
            List<StudentItem> students = new List<StudentItem>();
            students.Add(new StudentItem() { naam = "Gilles Covens", klas = "2NET" });
            return students;
        }

        [EnableCors("*")]
        [HttpPost(Name = "addStudent")]
        public async Task<IActionResult> PostNFCData([FromBody] StudentItem studentItem)
        {
            try
            {
                var json = JsonConvert.SerializeObject(studentItem);

                var content = new StringContent(json, Encoding.UTF8, "text/json");



                using (var httpClient = new HttpClient())
                {
                    var response = await httpClient.PostAsync("https://hackaton2023.azurewebsites.net/api/VivesHackathon", content);

                    if (response.IsSuccessStatusCode)
                    {
                        return Ok();
                    }
                    else
                    {
                        return StatusCode((int)response.StatusCode, response.ReasonPhrase);
                    }
                }


            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
            
        
  


       
       

    

    }
}
