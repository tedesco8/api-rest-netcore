using System;
using Microsoft.EntityFrameworkCore;

namespace Compras.Models
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
