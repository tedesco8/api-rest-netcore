using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Editoriales.Models {
    public partial class Editoriales {
        
        [Key]
        public int IdEditorial {get; set;}

        public string Nombre {get; set;}

    }
}