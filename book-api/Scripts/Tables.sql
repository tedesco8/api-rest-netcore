CREATE TABLE Libros (
    IdLibro int NOT NULL,
    Titulo varchar(50) NOT NULL,
    IdEditorial int NOT NULL,
    Fecha date,
    Costo int NOT NULL,
    PrecioSugerido int,
    Autor varchar(50) NOT NULL,
    PRIMARY KEY (IdLibro)
);

CREATE TABLE Editorials (
    IdEditorial int NOT NULL,
    Nombre varchar(50) NOT NULL,
    PRIMARY KEY (IdEditorial)
);

CREATE TABLE Clientes (
    IdCliente int NOT NULL,
    Identificacion varchar(50),
    Nombres varchar(50),
    Apellidos varchar(50),
    DireccionEnvio varchar(100) NOT NULL,
    TelefonoFijo varchar(50),
    Celular varchar(50),
    Email varchar(100),
    PRIMARY KEY (IdCliente)
);

CREATE TABLE Compras (
    IdCompraLibro int NOT NULL,
    IdLibro int NOT NULL,
    IdCliente int NOT NULL,
    Fecha date NOT NULL,
    Valor int NOT NULL,
    IdEmpleado int NOT NULL,
    PRIMARY KEY (IdCompraLibro)
);

CREATE TABLE Empleados (
    IdEmpleado int NOT NULL,
    Nombres varchar(50),
    Apellidos varchar(50),
    Direccion varchar(100) NOT NULL,
    TelefonoFijo varchar(50),
    Celular varchar(50),
    Cargo varchar(100),
    PRIMARY KEY (IdEmpleado)
);

ALTER TABLE Libros ADD FOREIGN KEY(IdEditorial) REFERENCES Editorials(IdEditorial);
ALTER TABLE Compras ADD FOREIGN KEY(IdLibro) REFERENCES Libros(IdLibro);
ALTER TABLE Compras ADD FOREIGN KEY(IdCliente) REFERENCES Clientes(IdCliente);
ALTER TABLE Compras ADD FOREIGN KEY(IdEmpleado) REFERENCES Empleados(IdEmpleado);