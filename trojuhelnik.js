function generateTrojuhelnikLevy(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaHvezdicek(i) + radaMezer(rows - i) + '<br>';
    }
    return trojuhelnik;
}

function generateTrojuhelnikPravy(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaMezer(rows - i) + radaHvezdicek(i) + '<br>';
    }
    return trojuhelnik;
}