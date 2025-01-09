using Microsoft.AspNetCore.Mvc;
using demo.Models;
using demo.Services;  // Importing the PetRepository

namespace demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsApiController : ControllerBase
    {
        // GET: api/pets
        [HttpGet]
        public IActionResult GetPets()
        {
            var pets = PetRepository.GetAllPets();
            return Ok(pets);  // Returns all pets in the shop
        }

        // GET: api/pets/{id}
        [HttpGet("{id}")]
        public IActionResult GetPet(int id)
        {
            var pet = PetRepository.GetPetById(id);
            if (pet == null)
            {
                return NotFound();  
            }
            return Ok(pet);  // Returns the pet if found
        }

        // GET: api/pets/type/{type}
        [HttpGet("type/{type}")]
        public IActionResult GetPetsByType(string type)
        {
            var pets = PetRepository.GetPetsByType(type);
            if (pets.Count == 0)
            {
                return NotFound();  // Returns 404 if no pets are found of the specified type
            }
            return Ok(pets);  // Returns the pets of the given type
        }
    }
}
