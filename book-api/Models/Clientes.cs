using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libros.Models {
    public partial class Clientes {
        
        [Key]
        public int IdCliente {get; set;}

        public string Identificacion {get; set;}

        public string Nombres {get; set;}

        public string Apellidos {get; set;}

        public string DireccionEnvio {get; set;}

        public string TelefonoFijo {get; set;}

        public string Celular {get; set;}

        public string Email {get; set;}

    }
}