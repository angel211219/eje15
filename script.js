document.getElementById('calculateBtn').addEventListener('click', calculateArea);

function calculateArea() {
    // Obtener el radio del input
    const radius = parseFloat(document.getElementById('radiusInput').value);
    
    // Manejo de valores negativos o no numéricos
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('result').innerText = 'Ingrese un valor de radio válido.';
        return;
    }

    // Calcular el área usando la fórmula π * r^2 y redondear a dos decimales
    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);

    // Mostrar el resultado
    document.getElementById('result').innerText = `Área del círculo: ${area} unidades cuadradas`;
}
