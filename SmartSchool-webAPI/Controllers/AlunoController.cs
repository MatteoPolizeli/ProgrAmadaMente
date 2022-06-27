using System;
using  Microsoft.AspNetCore.Mvc;

namespace SmartSchool_webAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController: ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){
            try
            {
                return Ok(""); 
                //200
            }
            catch (Exception ex)
            {    
                return BadRequest($"Erro: {ex.Message}");
                //400
            }
        }
    }
}