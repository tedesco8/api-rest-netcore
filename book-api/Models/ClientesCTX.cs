using System;
using Microsoft.EntityFrameworkCore;

namespace Clientes.Models
{
    public partial class ClientesCTX : DbContext
    {
        public ClientesCTX()
        {
        }

        public ClientesCTX(DbContextOptions<ClientesCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Clientes> Clientes { get; set; }
        
}
