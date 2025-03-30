function radaHvezdicek(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '*';
    }
    return radek;
}

function radaMezer(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '&nbsp;';
    }
    return radek;
}

let pocetRadku = 10;    
let divVystup = document.getElementById('divVystup'); 

document.getElementById('btn4').onclick = function() {
    divVystup.innerHTML = generateCtverec(pocetRadku);
}
document.getElementById('btn3Right').onclick = function() {
    divVystup.innerHTML = generate3Right(pocetRadku);
}

document.getElementById('btn3Left').onclick = function() {
    divVystup.innerHTML = generate3Left(pocetRadku);
}

document.getElementById('btnPyramid').onclick = function() {
    divVystup.innerHTML = generatePyramida(pocetRadku); 
}

document.getElementById('btnPyramidNaopak').onclick = function() {
    divVystup.innerHTML = generatePyramidaNaopak(pocetRadku);
}

document.getElementById('btnObrys').onclick = function() {
    divVystup.innerHTML = generateObrys(pocetRadku, pocetRadku);
}