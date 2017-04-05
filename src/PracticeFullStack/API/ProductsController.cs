using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PracticeFullStack.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PracticeFullStack.API
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        public static List<Product> _products = new List<Product>
        {
            new Product {Name="Soda", Price=1.99m },
            new Product {Name="Sprite", Price=1.99m },
            new Product {Name="Mr Pib", Price=1.99m },
            new Product {Name="Big Red", Price=1.99m }

        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _products;
        }

        // GET api/values/5
        [HttpGet("{name}")]
        public string Get(string name)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if (product != null)
            {
                _products.Add(product);
                return Ok(product);
            }
            return NotFound();

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
