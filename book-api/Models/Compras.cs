using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Compras.Models {
    public partial class Compras {
        
        [Key]
        public int IdCompraLibro {get; set;}

        [Key]
        public int IdLibro {get; set;}
        
        [Key]
        public int IdCliente {get; set;}

        [Column(TypeName = "date")]
        public DateTime? Fecha {get; set;}

        public int Valor {get; set;}

        [Key]
        public int idEmpleado {get; set;}

    }
}