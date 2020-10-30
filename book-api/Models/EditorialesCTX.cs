using System;
using Microsoft.EntityFrameworkCore;

namespace Editoriales.Models
{
    public partial class EditorialesCTX : DbContext
    {
        public EditorialesCTX()
        {
        }

        public EditorialesCTX(DbContextOptions<EditorialesCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Editoriales> Editoriales { get; set; }
        
}
