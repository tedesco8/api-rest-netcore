using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libros.Models {
    public class Libros {
        
        [Key]
        public int IdLibro {get; set;}

        public string Titulo {get; set;}

        [ForeignKey("IdEditorial")]
        public virtual Editorials Editorials { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Fecha {get; set;}

        public int Costo {get; set;}

        public int PrecioSugerido {get; set;}

    }
}