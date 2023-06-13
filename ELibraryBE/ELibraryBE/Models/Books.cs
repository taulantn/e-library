using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ELibraryBE.Models
{
    public class Books
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpDate{ get; set; }
        public string ImageUrl { get; set; }
        public int Status { get; set; }


    }
}
