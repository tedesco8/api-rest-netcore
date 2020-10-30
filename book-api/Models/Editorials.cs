using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Editorials.Models {
    public partial class Editorials {
        
        [Key]
        public int IdEditorial {get; set;}

        public string Nombre {get; set;}

    }
}