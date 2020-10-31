module.exports = {
  headersClientes: [
    { text: "Opciones", value: "opciones", sortable: false },
    { text: "IdCliente", value: "IdCliente", sortable: true },
    { text: "Identificacion", value: "Identificacion", sortable: false },
    { text: "Nombres", value: "Nombres", sortable: false },
    { text: "Apellidos", value: "Apellidos", sortable: false },
    { text: "DireccionEnvio", value: "DireccionEnvio", sortable: false },
    { text: "TelefonoFijo", value: "TelefonoFijo", sortable: false },
    { text: "Celular", value: "Celular", sortable: false },
    { text: "Email", value: "Email", sortable: false }
  ],
  headersLibros: [
    { text: "Opciones", value: "opciones", sortable: false },
    { text: "IdLibro", value: "IdLibro", sortable: true },
    { text: "Titulo", value: "Titulo", sortable: false },
    { text: "Editorial", value: "Editoriales", sortable: false },
    { text: "Fecha", value: "Fecha", sortable: false },
    { text: "Costo", value: "Costo", sortable: false },
    { text: "PrecioSugerido", value: "PrecioSugerido", sortable: false },
  ],
  headersEmpleados: [
    { text: "Opciones", value: "opciones", sortable: false },
    { text: "IdEmpleado", value: "IdEmpleado", sortable: true },
    { text: "Nombre", value: "Nombres", sortable: false },
    { text: "Apellidos", value: "Apellidos", sortable: false },
    { text: "Direccion", value: "Direccion", sortable: false },
    { text: "TelefonoFijo", value: "TelefonoFijo", sortable: false },
    { text: "Celular", value: "Celular", sortable: false },
    { text: "Cargo", value: "Cargo", sortable: false },
  ],
  headersEditoriales: [
    { text: "Opciones", value: "opciones", sortable: false },
    { text: "IdEditorial", value: "IdEditorial", sortable: true },
    { text: "Nombre", value: "Nombre", sortable: false },
  ],
  headersCompras: [
    { text: "Opciones", value: "opciones", sortable: false },
    { text: "IdCompraLibro", value: "IdCompraLibro", sortable: true },
    { text: "Libro", value: "Libros", sortable: true },
    { text: "Cliente", value: "Clientes", sortable: false },
    { text: "Fecha", value: "Fecha", sortable: false },
    { text: "Valor", value: "Valor", sortable: false },
    { text: "Empleados", value: "Empleados", sortable: false },
  ]
};
