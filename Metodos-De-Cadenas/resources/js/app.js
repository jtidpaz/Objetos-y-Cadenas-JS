function ejecutarEjercicios() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados previos

    // Datos de la familia
    const familia = [
        { nombre: " Ana ", edad: 30, ocupacion: " Ingeniera " },
        { nombre: " Carlos ", edad: 35, ocupacion: " Médico " },
        { nombre: " Sofía ", edad: 25, ocupacion: " Diseñadora " },
        { nombre: " Juan ", edad: 40, ocupacion: " Profesor " }
    ];

    // Ejercicio 1: For con String.concat()
    let resultado1 = "<h3>Ejercicio 1: For con String.concat()</h3>";
    let mensaje = "Los integrantes de la familia son: ";
    
    for (let i = 0; i < familia.length; i++) {
        mensaje = mensaje.concat(familia[i].nombre.trim());
        if (i < familia.length - 1) {
            mensaje = mensaje.concat(", "); // Añadir coma entre nombres
        }
    }
    
    resultado1 += `${mensaje} <br>`;
    resultadosDiv.innerHTML += resultado1;

    // Ejercicio 2: For/In con String.trim()
    let resultado2 = "<h3>Ejercicio 2: For/In con String.trim()</h3>";
    for (let miembro of familia) {
        resultado2 += `Nombre: ${miembro.nombre.trim()}, Edad: ${miembro.edad}, Ocupación: ${miembro.ocupacion.trim()} <br>`; // Trim para limpiar espacios
    }
    resultadosDiv.innerHTML += resultado2;

    // Ejercicio 3: For/Of con String.trimStart()
    let resultado3 = "<h3>Ejercicio 3: For/Of con String.trimStart()</h3>";
    for (let miembro of familia) {
        resultado3 += `Ocupación: ${miembro.ocupacion.trimStart()} <br>`; // TrimStart para eliminar espacios al inicio
    }
    resultadosDiv.innerHTML += resultado3;

    // Ejercicio 4: While con String.trimEnd()
    let resultado4 = "<h3>Ejercicio 4: While con String.trimEnd()</h3>";
    let texto;
    let textosConEspacios = [];
    do {
        texto = prompt("Ingresa un hobby (escribe 'salir' para terminar):");
        if (texto && texto !== 'salir') {
            textosConEspacios.push(texto.trimEnd()); // TrimEnd para eliminar espacios al final
        }
    } while (texto !== 'salir');
    
    resultado4 += `Hobbies ingresados: <br>${textosConEspacios.join('<br>')} <br>`;
    resultadosDiv.innerHTML += resultado4;

    // Ejercicio 5: Do/While con String.padStart()
    let resultado5 = "<h3>Ejercicio 5: Do/While con String.padStart()</h3>";
    let numeroIdentificacion;
    let numerosEnmascarados = [];
    
    do {
        numeroIdentificacion = prompt("Ingresa un número de identificación (escribe 'salir' para terminar):");
        if (numeroIdentificacion && numeroIdentificacion !== 'salir') {
            const ultimosnumeros = numeroIdentificacion.slice(-4);
            const enmascarado = ultimosnumeros.padStart(numeroIdentificacion.length, '*'); // PadStart para enmascarar
            numerosEnmascarados.push(enmascarado);
        }
    } while (numeroIdentificacion !== 'salir');

    resultado5 += `Los ultimos numeros de identificacion son : <br>${numerosEnmascarados.join('<br>')} <br>`;
    resultadosDiv.innerHTML += resultado5;
}