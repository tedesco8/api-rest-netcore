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
    public class EditorialesController : ControllerBase
    {
        private readonly EditorialesCTX _context;

        public EditorialesController(EditorialesCTX context)
        {
            _context = context;
        }

        // GET: api/Editoriales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Editoriales>>> GetEditoriales()
        {
            return await _context.Editoriales.ToListAsync();
        }

        // GET: api/Editoriales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Editoriales>> GetEditoriales(int id)
        {
            var editoriales = await _context.Editoriales.FindAsync(id);

            if (editoriales == null)
            {
                return NotFound();
            }

            return editoriales;
        }

        // PUT: api/Editoriales/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEditoriales(int id, Editoriales editoriales)
        {
            if (id != editoriales.IdEditorial)
            {
                return BadRequest();
            }

            _context.Entry(editoriales).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EditorialesExists(id))
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

        // POST: api/Editoriales
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Editoriales>> PostEditoriales(Editoriales editoriales)
        {
            _context.Editoriales.Add(editoriales);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLibros", new { id = editoriales.IdEditorial }, editoriales);
        }

        // DELETE: api/Editoriales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Editoriales>> DeleteEditoriales(int id)
        {
            var editoriales = await _context.Editoriales.FindAsync(id);
            if (editoriales == null)
            {
                return NotFound();
            }

            _context.Editoriales.Remove(editoriales);
            await _context.SaveChangesAsync();

            return editoriales;
        }

        private bool EditorialesExists(int id)
        {
            return _context.Editoriales.Any(e => e.IdEditorial == id);
        }
    }
}
