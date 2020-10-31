using System;
using Microsoft.EntityFrameworkCore;

namespace book_api.Models
{
    public partial class LibrosCTX : DbContext
    {
        public LibrosCTX()
        {
        }

        public LibrosCTX(DbContextOptions<LibrosCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Libros> Libros { get; set; }
    }
}
