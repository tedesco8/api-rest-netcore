using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace book_api.Models {
    public partial class Compras {
        
        [Key]
        public int IdCompraLibro {get; set;}

        [ForeignKey("IdLibro")]
        public virtual Libros Libros { get; set; }

        [ForeignKey("IdCliente")]
        public virtual Clientes Clientes { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Fecha {get; set;}

        public int Valor {get; set;}

        [ForeignKey("idEmpleado")]
        public virtual Empleados Empleados { get; set; }

    }
}