function menu() {
    let menuopci = prompt("menu\n1. Agregar mascota\n2. Buscar mascota\n3. Filtrar mascotas vacunadas \n4. Promedio de edad\n5. Listar mascotas por edad\n6. Salir");
    return menuopci;
}

// Lista de mascotas
let mascotas = [];
const agregarMascota = (nombre, edad, tipo, raza, vacunado) => {
    let mascota = {
        nombre: nombre,
        edad: edad,
        tipo: tipo,
        raza: raza,
        vacunado: vacunado
    };
    mascotas.push(mascota);
    console.log("Se agregó: " + nombre);
};

const buscarPorNombre = (nombre) => {
    const resultados = [];
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            resultados.push(mascotas[i]);
        }
    }
    return resultados;
};

const listarMascotasPorEdad = () => mascotas.length === 0
    ? alert("No hay mascotas registradas para listar.")
    : alert("Mascotas ordenadas por edad (de mayor a menor):\n\n" +
        [...mascotas]
            .sort((a, b) => b.edad - a.edad)
            .map(m => `- Nombre: ${m.nombre}, Edad: ${m.edad}, Tipo: ${m.tipo}, Raza: ${m.raza}, Vacunado: ${m.vacunado ? 'Sí' : 'No'}`)
            .join('\n'));


const calcularPromedioEdad = () => {
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas para calcular el promedio de edad.");
        return;
    }
    const totalEdad = mascotas.reduce((sum, mascota) => sum + mascota.edad, 0);
    const promedio = totalEdad / mascotas.length;
    alert(`El promedio de edad de las mascotas es: ${promedio.toFixed(2)} años`);
}
const mascotasVacunadas = () => {
    const vacunadas = mascotas.filter(mascota => mascota.vacunado);
    if (vacunadas.length === 0) {
        alert("No hay mascotas vacunadas registradas.");
    } else {
        alert("Mascotas vacunadas:\n\n" +
            vacunadas.map(m => `- Nombre: ${m.nombre}, Edad: ${m.edad}, Tipo: ${m.tipo}, Raza: ${m.raza}`).join('\n'));
    }
}
while (true) {
let opcion = menu();
switch (opcion) {
    case '1':
        let nombre = prompt("Ingrese el nombre de la mascota:");
        let edad = prompt("Ingrese la edad de la mascota:");
        let tipo = prompt("Ingrese el tipo de mascota (perro, gato, etc.):");
        let raza = prompt("Ingrese la raza de la mascota:");
        let vacunado = confirm("¿La mascota está vacunada?");
        agregarMascota(nombre, edad, tipo, raza, vacunado);
        // Lógica para agregar mascota
        break;
    case '2':
        let nombreBuscar = prompt("Ingrese el nombre de la mascota a buscar:");
        let resultadosBusqueda = buscarPorNombre(nombreBuscar);
        if (resultadosBusqueda.length > 0) {
            console.log("Mascotas encontradas:");
            for (const mascota of resultadosBusqueda) {
                alert(`- Nombre: ${mascota.nombre}, Edad: ${mascota.edad}, Tipo: ${mascota.tipo}, Raza: ${mascota.raza}, Vacunado: ${mascota.vacunado ? 'Sí' : 'No'}`);
            }
        } else {
            console.log("No se encontraron mascotas con ese nombre.");
        }
        break;
    case '3':
        mascotasVacunadas();
        // Lógica para filtrar mascotas vacunadas
        break;
    case '4':
        calcularPromedioEdad();
        // Lógica para calcular promedio de edad
        break;
    case '5':
        listarMascotasPorEdad();
        break;
    case '6':
        console.log("Saliendo del programa...");
        break;
    default:
        console.log("Opción no válida, por favor intente de nuevo.");
}
}