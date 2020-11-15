using System;
using Microsoft.EntityFrameworkCore;

namespace book_api.Models
{
    public partial class ComprasCTX : DbContext
    {
        public ComprasCTX()
        {
        }

        public ComprasCTX(DbContextOptions<ComprasCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Compras> Compras { get; set; }
    }
        
}
