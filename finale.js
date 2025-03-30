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

document.getElementById('btnCtverec').onclick = function() {
    divVystup.innerHTML = generateCtverec(pocetRadku);
}
document.getElementById('btnTrojuhelnikPravy').onclick = function() {
    divVystup.innerHTML = generateTrojuhelnikPravy(pocetRadku);
}

document.getElementById('btnTrojuhelnikLevy').onclick = function() {
    divVystup.innerHTML = generateTrojuhelnikLevy(pocetRadku);
}

document.getElementById('btnPyramida').onclick = function() {
    divVystup.innerHTML = generatePyramida(pocetRadku); 
}

document.getElementById('btnPyramidaObracena').onclick = function() {
    divVystup.innerHTML = generatePyramidaObracena(pocetRadku);
}

document.getElementById('btnObrys').onclick = function() {
    divVystup.innerHTML = generateObrys(pocetRadku, pocetRadku);
}