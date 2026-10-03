 console.log("\n-- Dataset 1: Sistema de Reservas de Hotel--");

let reservas = [
    {
        "huesped": "María González",
        "habitacion": "101",
        "noches": 3,
        "checkIn": "2025-01-15",
        "precioNoche": 120,
        "estado": "activa"
    },
    {
        "huesped": "Carlos López",
        "habitacion": "205",
        "noches": 5,
        "checkIn": "2025-01-20",
        "precioNoche": 150,
        "estado": "pendiente"
    },
    {
        "huesped": "Ana Martínez",
        "habitacion": "102",
        "noches": 2,
        "checkIn": "2025-01-18",
        "precioNoche": 100,
        "estado": "activa"
    },
    {
        "huesped": "Pedro Sánchez",
        "habitacion": "301",
        "noches": 7,
        "checkIn": "2025-01-25",
        "precioNoche": 200,
        "estado": "cancelada"
    }
];


// 1. Reservas ordenadas por precio por noche (de mayor a menor)
let ordenadas = [...reservas].sort((a, b) => b.precioNoche - a.precioNoche);
console.log("ordenadas: ",ordenadas);


//2. Reservas activas
let activas = reservas.filter((r) => r.estado === "activa");
console.log("Activas: ", activas);


//3. Total a pagar por cada huésped (noches * precioNoche)
let totales = reservas.map((r) => {
    return {
        huesped: r.huesped,
        total: r.noches * r.precioNoche
    };
});
console.log("Totales: ", totales);


//4. Encontrar la reserva más larga (mayor número de noches)
let masLarga = reservas.reduce((mayor, r) => {
    return r.noches > mayor.noches ? r : mayor;
});
console.log("Reserva mas larga: ", masLarga);



// 5. Agrupar reservas por estado
let porEstado = reservas.reduce((grupos, r) => {
    if (!grupos[r.estado]) {
        grupos[r.estado] = [];
    }
    grupos[r.estado].push(r);
    return grupos;
}, {});
console.log("Por estado: ", porEstado);


 console.log("\n-- Dataset 2: Inventario de Supermercado --");



//  // Dataset de ejemplo - Inventario de Supermercado

 let productos = [

  {

  "nombre": "Leche Entera",

  "categoria": "Lácteos",

  "precio": 2.50,

  "stock": 45,

  "proveedor": "Lactosa SA"

  },

  {

  "nombre": "Pan Integral",

  "categoria": "Panadería",

  "precio": 1.80,

  "stock": 30,

  "proveedor": "Panadería Moderna"

  },

  {

  "nombre": "Arroz Premium",

  "categoria": "Granos",

  "precio": 3.20,

  "stock": 15,

  "proveedor": "Arrocera Nacional"

  },

  {

  "nombre": "Yogurt Natural",

  "categoria": "Lácteos",

  "precio": 1.95,

  "stock": 0,

  "proveedor": "Lactosa SA"

  },

  {

  "nombre": "Aceite de Oliva",

  "categoria": "Aceites",

  "precio": 8.75,

  "stock": 22,

  "proveedor": "Aceites del Sur"

  }

 ];



 //1. Ordenar productos por precio (de menor a mayor)
let porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Ordenados por precio: ", porPrecio);


// 2. Filtrar productos sin stock
let sinStock = productos.filter((p) => p.stock === 0);
console.log("Productos sin stock: ",sinStock);


// 3. Calcular el valor total del inventario (precio * stock)
let valorTotal = productos.reduce((total, p) => {
    return total + p.precio * p.stock;
}, 0);
console.log("Valor total: ",valorTotal);


// 4. Agrupar productos por categoría
let porCategoria = productos.reduce((grupos, p) => {
    if (!grupos[p.categoria]) {
        grupos[p.categoria] = [];
    }
    grupos[p.categoria].push(p);
    return grupos;
}, {});
console.log("Por categoria: ",porCategoria);


// 5. Encontrar el producto más caro
let masCaro = productos.reduce((mayor, p) => {
    return p.precio > mayor.precio ? p : mayor;
});
console.log("Producto mas caro: ",masCaro);


// 6. Filtrar productos de un proveedor específico
let deLactosa = productos.filter((p) => p.proveedor === "Lactosa SA");
console.log("Producto especifico: ",deLactosa);


 console.log("\n-- Dataset 3: Estudiantes y Calificaciones--");


let estudiantes = [
    {
        "nombre": "Laura Méndez",
        "grado": "10°",
        "edad": 15,
        "calificaciones": [85, 92, 78, 90],
        "asistencia": 95
    },
    {
        "nombre": "Diego Ramirez",
        "grado": "9°",
        "edad": 14,
        "calificaciones": [70, 65, 80, 75],
        "asistencia": 88
    },
    {
        "nombre": "Sofía Castro",
        "grado": "10°",
        "edad": 16,
        "calificaciones": [95, 98, 92, 96],
        "asistencia": 98
    },
    {
        "nombre": "Javier López",
        "grado": "9°",
        "edad": 14,
        "calificaciones": [60, 72, 68, 65],
        "asistencia": 82
    }
];

const promedio = (notas) => notas.reduce((suma, n) => suma + n, 0) / notas.length;

// 1. Ordenar estudiantes por promedio de calificaciones
let porPromedio = [...estudiantes].sort(
    (a, b) => promedio(b.calificaciones) - promedio(a.calificaciones)
);
console.log("Orden de Promedio: ",porPromedio);


// 2. Filtrar estudiantes con asistencia menor al 90%
let pocaAsistencia = estudiantes.filter((e) => e.asistencia < 90);
console.log("Asistencia menor del 90%",pocaAsistencia);


// 3. Calcular el promedio de cada estudiante
let promedios = estudiantes.map((e) => {
    return {
        nombre: e.nombre,
        promedio: promedio(e.calificaciones)
    };
});
console.log("Promedio por estudiante",promedios);


// 4. Encontrar al estudiante con mejor promedio
let mejor = estudiantes.reduce((mayor, e) => {
    return promedio(e.calificaciones) > promedio(mayor.calificaciones) ? e : mayor;
});
console.log("Mejor promedio: ",mejor);


// 5. Agrupar estudiantes por grado
let porGrado = estudiantes.reduce((grupos, e) => {
    if (!grupos[e.grado]) {
        grupos[e.grado] = [];
    }
    grupos[e.grado].push(e);
    return grupos;
}, {});
console.log("Agrupados por grado: ",porGrado);


// 6. Filtrar estudiantes mayores de 15 años
let mayores = estudiantes.filter((e) => e.edad > 15);
console.log("Estudiantes mayores de 15: ",mayores);


console.log("\n--Dataset 4: Recursos Humanos")


let empleados = [
    {
        "nombre": "Roberto Jiménez",
        "departamento": "Ventas",
        "salario": 35000,
        "antiguedad": 3,
        "cargo": "Ejecutivo de Ventas"
    },
    {
        "nombre": "Elena Torres",
        "departamento": "TI",
        "salario": 55000,
        "antiguedad": 7,
        "cargo": "Desarrolladora Senior"
    },
    {
        "nombre": "Miguel Ángel Ruiz",
        "departamento": "Ventas",
        "salario": 42000,
        "antiguedad": 5,
        "cargo": "Gerente de Ventas"
    },
    {
        "nombre": "Claudia Reyes",
        "departamento": "TI",
        "salario": 48000,
        "antiguedad": 2,
        "cargo": "Desarrolladora Junior"
    }
];

// 1. Ordenar empleados por salario (de mayor a menor)
let porSalario = [...empleados].sort((a, b) => b.salario - a.salario);
console.log("Ordenados por salario: ",porSalario);


// 2. Filtrar empleados con antigüedad mayor a 4 años
let veteranos = empleados.filter((e) => e.antiguedad > 4);
console.log("Empleados antiguos: ", veteranos);


// 3. Calcular el salario promedio por departamento
let grupos = empleados.reduce((acc, e) => {
    if (!acc[e.departamento]) {
        acc[e.departamento] = [];
    }
    acc[e.departamento].push(e);
    return acc;
}, {});

let promedioPorDepto = {};
for (let depto in grupos) {
    let suma = grupos[depto].reduce((total, e) => total + e.salario, 0);
    promedioPorDepto[depto] = suma / grupos[depto].length;
}
console.log("Salario promedio: ",promedioPorDepto);


// 4. Encontrar el empleado mejor pagado
let mejorPagado = empleados.reduce((mayor, e) => {
    return e.salario > mayor.salario ? e : mayor;
});
console.log("Empleado mejor pagado",mejorPagado);


// 5. Agrupar empleados por departamento
let porDepartamento = empleados.reduce((grupos, e) => {
    if (!grupos[e.departamento]) {
        grupos[e.departamento] = [];
    }
    grupos[e.departamento].push(e);
    return grupos;
}, {});
console.log("Por departamento",porDepartamento);


// 6. Filtrar empleados por cargo
let gerentes = empleados.filter((e) => e.cargo === "Gerente de Ventas");
console.log("Poe cargo",gerentes);


console.log("\n--Dataset 5. Catálogo de Videojuegos")

let videojuegos = [
    {
        "titulo": "The Legend of Zelda: Breath of the Wild",
        "plataforma": "Nintendo Switch",
        "precio": 59.99,
        "genero": "Aventura",
        "rating": 97,
        "stock": 25
    },
    {
        "titulo": "Call of Duty: Modern Warfare",
        "plataforma": "PlayStation 4",
        "precio": 49.99,
        "genero": "FPS",
        "rating": 85,
        "stock": 40
    },
    {
        "titulo": "FIFA 25",
        "plataforma": "Xbox Series X",
        "precio": 54.99,
        "genero": "Deportes",
        "rating": 82,
        "stock": 0
    },
    {
        "titulo": "Super Mario Odyssey",
        "plataforma": "Nintendo Switch",
        "precio": 49.99,
        "genero": "Plataformas",
        "rating": 96,
        "stock": 15
    }
];


// 1. Ordenar juegos por rating (de mayor a menor)
let porRating = [...videojuegos].sort((a, b) => b.rating - a.rating);
console.log("Por rating",porRating);


// 2. Filtrar juegos disponibles (con stock)
let disponibles = videojuegos.filter((v) => v.stock > 0);
console.log("Disponibles: ",disponibles);


// 3. Filtrar juegos por plataforma
let enSwitch = videojuegos.filter((v) => v.plataforma === "Nintendo Switch");
console.log("Juegos por plataforma: ",enSwitch);


// 4. Encontrar el juego más caro
let juegoMasCaro = videojuegos.reduce((mayor, v) => {
    return v.precio > mayor.precio ? v : mayor;
});
console.log("Juego mas caro",juegoMasCaro);


// 5. Agrupar juegos por género
let porGenero = videojuegos.reduce((grupos, v) => {
    if (!grupos[v.genero]) {
        grupos[v.genero] = [];
    }
    grupos[v.genero].push(v);
    return grupos;
}, {});
console.log("Juegos por genero: ",porGenero);


// 6. Calcular el valor total del inventario
let valorTotalInv = videojuegos.reduce((total, v) => {
    return total + v.precio * v.stock;
}, 0);
console.log("Valor total inventario: ",valorTotalInv.toFixed(2));


console.log("\n--Dataset 6: Datos de un Banco");


let banco = [
    {
        "nombre": "Banco Santander",
        "direccion": "Av. de la Independencia, 100",
        "telefono": "12345678",
        "correo": "banco@santander.com",
        "saldo": 1000000,
        "dia_mora": 10
    },
    {
        "nombre": "Banco BBVA",
        "direccion": "Av. de la Independencia, 200",
        "telefono": "98765432",
        "correo": "banco@bbva.com",
        "saldo": 2000000,
        "dia_mora": 15
    },
    {
        "nombre": "Bancolombia",
        "direccion": "Av. de la Independencia, 300",
        "telefono": "12345678",
        "correo": "banco@santander.com",
        "saldo": 3000000,
        "dia_mora": 20
    },
    {
        "nombre": "Davivienda",
        "direccion": "Av. de la Independencia, 400",
        "telefono": "98765432",
        "correo": "banco@bbva.com",
        "saldo": 4000000,
        "dia_mora": 25
    }
];

// 1. Ordenar bancos por saldo (de mayor a menor)
let porSaldo = [...banco].sort((a, b) => b.saldo - a.saldo);
console.log("Orden por saldo: ",porSaldo);


// 2. Filtrar bancos con saldo mayor a 2000000
let saldoAlto = banco.filter((b) => b.saldo > 2000000);
console.log("Saldo alto: ",saldoAlto);


// 3. Calcular el saldo promedio por banco
let saldoPromedio = banco.reduce((suma, b) => suma + b.saldo, 0) / banco.length;
console.log("Saldo promedio: ",saldoPromedio);


// 4. Encontrar el banco con mayor dia mora
let mayorMora = banco.reduce((mayor, b) => {
    return b.dia_mora > mayor.dia_mora ? b : mayor;
});
console.log("Mayor dia mora: ",mayorMora);


// 5. Agrupar bancos por nombre
let porNombre = banco.reduce((grupos, b) => {
    if (!grupos[b.nombre]) {
        grupos[b.nombre] = [];
    }
    grupos[b.nombre].push(b);
    return grupos;
}, {});
console.log("Por nombre",porNombre);


// 6. Filtrar bancos por correo
let deSantander = banco.filter((b) => b.correo === "banco@santander.com");
console.log("Por correo: ",deSantander);