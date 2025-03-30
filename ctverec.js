function generateCtverec(rows) {
    let ctverec = '';
    for (let i = 1; i <= rows; i++) {
        ctverec += radaHvezdicek(rows) + '<br>';
    }
    return ctverec;
}