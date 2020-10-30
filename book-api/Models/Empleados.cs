using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libros.Models {
    public partial class Empleados {
        
        [Key]
        public int IdEmpleado {get; set;}

        public string Nombres {get; set;}

        public string Apellidos {get; set;}

        public string Direccion {get; set;}

        public string TelefonoFijo {get; set;}

        public string Celular {get; set;}

        public string Cargo {get; set;}

    }
}