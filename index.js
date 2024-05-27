// antes que nada tuve que investigar bastante sobre la formula de anualidad.se divide por 100 para convertirla de un porcentaje a un decimal Luego se divide por 12 para obtener la tasa de interés mensual
function calcularPagoMensual(monto, tasaInteres, numeroCuotas) {
    const tasaMensual = tasaInteres / 100 / 12;
    // Calcular bluce
    let potencia = 1;
    for (let i = 0; i < numeroCuotas; i++) {
        potencia *= (1 + tasaMensual);
    }

    // Calcular el denominador de anualidad
    const denominador = 1 - (1 / potencia);

    // Calcular el pago mensual usando anualidad
    const pagoMensual = monto * tasaMensual / denominador;

    // Redondear el resultado a dos decimales,Sumamos 0.5 para redondear al valor entero más cercano.
    const pagoMensualRedondeado = ((pagoMensual * 100) + 0.5) | 0;
    return pagoMensualRedondeado / 100;
}
//concatena una línea que indica el número de cuota y el pago mensual.
function mostrarCuotas(pagoMensual, numeroCuotas) {
    let detalles = `Detalles de Pagos:\n`;
    for (let i = 1; i <= numeroCuotas; i++) {
        detalles += `Cuota ${i}: $${pagoMensual}\n`;
    }
    return detalles;
}
// Solicitar datos al usuario usando prompt
const monto = parseFloat(prompt("Ingrese el monto total:"));
const numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
const tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (en %):"));

if (isNaN(monto) || isNaN(numeroCuotas) || isNaN(tasaInteres) || monto <= 0 || numeroCuotas <= 0 || tasaInteres < 0) {
    alert("Por favor, ingrese valores válidos.");
} else {
    // Calcular el pago mensual
    const pagoMensual = calcularPagoMensual(monto, tasaInteres, numeroCuotas);

    // Mostrar el pago mensual
    alert(`El pago mensual es: $${pagoMensual}`);

    // Mostrar el detalle de pagos en cada cuota
    const detalles = mostrarCuotas(pagoMensual, numeroCuotas);
    alert(detalles);
}
