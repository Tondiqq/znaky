function generate3Left(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaHvezdicek(i) + radaMezer(rows - i) + '<br>';
    }
    return trojuhelnik;
}

function generate3Right(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaMezer(rows - i) + radaHvezdicek(i) + '<br>';
    }
    return trojuhelnik;
}