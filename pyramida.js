function generatePyramida(rows) {
    let pyramida = '';
    for (let i = 1; i <= rows; i++) {
        pyramida += radaMezer(rows-i) + radaHvezdicek(2*i-1) + radaMezer(rows-i) + '<br>'; 
    }
    return pyramida;
}

function generatePyramidaObracena(rows) {
    let pyramida = '';
    for (let i = rows; i>=1 ; i--) {
        pyramida += radaMezer(rows-i) + radaHvezdicek(2*i-1) + radaMezer(rows-i) + '<br>'; 
    }
    return pyramida;
}