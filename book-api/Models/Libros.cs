using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libros.Models {
    public partial class Libros {
        
        [Key]
        public int IdLibro {get; set;}

        public string Titulo {get; set;}
        
        [Key]
        public int IdEditorial {get; set;}

        [Column(TypeName = "date")]
        public DateTime? Fecha {get; set;}

        public int Costo {get; set;}

        public int PrecioSugerido {get; set;}

    }
}