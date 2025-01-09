using demo.Models;

namespace demo.Services
{
    public static class PetRepository
    {
        private static List<Pet> pets = new List<Pet>
        {
            // Dogs
            new Pet { Id = 1, Name = "Buddy", Type = "Dog", Price = 500.00m },
            new Pet { Id = 2, Name = "Charlie", Type = "Dog", Price = 450.00m },
            // Cats
            new Pet { Id = 3, Name = "Mittens", Type = "Cat", Price = 300.00m },
            new Pet { Id = 4, Name = "Snowball", Type = "Cat", Price = 250.00m },
            // Birds
            new Pet { Id = 5, Name = "Tweety", Type = "Bird", Price = 150.00m },
            new Pet { Id = 6, Name = "Polly", Type = "Bird", Price = 120.00m },
            // Fish
            new Pet { Id = 7, Name = "Goldie", Type = "Fish", Price = 50.00m },
            new Pet { Id = 8, Name = "Bubbles", Type = "Fish", Price = 30.00m }
        };

        public static List<Pet> GetAllPets() => pets;

        public static Pet GetPetById(int id) => pets.FirstOrDefault(pet => pet.Id == id);

        public static List<Pet> GetPetsByType(string type) => pets.Where(pet => pet.Type.Equals(type, StringComparison.OrdinalIgnoreCase)).ToList();
    }
}
