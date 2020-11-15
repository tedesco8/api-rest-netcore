using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using book_api.Models;

namespace book_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly EmpleadosCTX _context;

        public EmpleadosController(EmpleadosCTX context)
        {
            _context = context;
        }

        // GET: api/Empleados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleados>>> GetEmpleados()
        {
            return await _context.Empleados.ToListAsync();
        }

        // GET: api/Empleados/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empleados>> GetEmpleados(int id)
        {
            var empleados = await _context.Empleados.FindAsync(id);

            if (empleados == null)
            {
                return NotFound();
            }

            return empleados;
        }

        // PUT: api/Libros/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Empleados empleados)
        {
            if (id != empleados.IdEmpleado)
            {
                return BadRequest();
            }

            _context.Entry(empleados).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleadosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Libros
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Empleados>> PostEmpleados(Empleados empleados)
        {
            _context.Empleados.Add(empleados);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLibros", new { id = empleados.IdEmpleado }, empleados);
        }

        // DELETE: api/Libros/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Empleados>> DeleteEmpleados(int id)
        {
            var empleados = await _context.Empleados.FindAsync(id);
            if (empleados == null)
            {
                return NotFound();
            }

            _context.Empleados.Remove(empleados);
            await _context.SaveChangesAsync();

            return empleados;
        }

        private bool EmpleadosExists(int id)
        {
            return _context.Empleados.Any(e => e.IdEmpleado == id);
        }
    }
}
