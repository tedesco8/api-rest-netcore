using System;
using Microsoft.EntityFrameworkCore;

namespace book_api.Models
{
    public partial class EmpleadosCTX : DbContext
    {
        public EmpleadosCTX()
        {
        }

        public EmpleadosCTX(DbContextOptions<EmpleadosCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Empleados> Empleados { get; set; }
    }
        
}
