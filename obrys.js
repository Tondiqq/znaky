function generateObrys(rows) {
    let Obrys = '';
    for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === rows) {
            Obrys += radaHvezdicek(rows) + '<br>';
        } else {
            Obrys += radaHvezdicek(1) + radaMezer(rows - 2) + radaHvezdicek(1) + '<br>';
        }
    }
    return Obrys;
}