// JUDUL BESAR - Membuat logika dropdown

// let pilihan = document.getElementById("pilihan");
// const pilihanUser = pilihan

// const buttonPilih = document.getElementById("buttonPilih");

let showPilihan = document.getElementById("showPilihan");

const pilihan = document.getElementById("pilihan");

let pIndex;

let pilihanRealKamu;
let pilihanRealAi;

function gantiPilihan() {
    if (pilihan.value == "batu") {
        pIndex = 0;
        pilihanRealKamu = "batu";
        gambarPlayer.setAttribute("src", "img/batu-kanan.jpg");
    } else if (pilihan.value == "kertas") {
        pIndex = 1;
        pilihanRealKamu = "kertas";
        gambarPlayer.setAttribute("src", "img/kertas-kanan.jpg");
    } else if (pilihan.value == "gunting") {
        pIndex = 2;
        pilihanRealKamu = "gunting";
        gambarPlayer.setAttribute("src", "img/gunting-kanan.jpg");
    } else {
        console.warn("ERROR, gantiPilihan()");
    }

    // alert("function running", `${pIndex}`);

    showPilihan.textContent = `${pilihan[pIndex].value}`;
    document.getElementById("showKamu").innerHTML = `${pilihan[pIndex].value}`;
}

document.getElementById("buttonPilih").onclick = gantiPilihan;

function panggilIndex() {
    console.info(pilihan.selectedIndex);
}
// AKHIR Logika dropdown

// JUDUL BESAR section gambar player
const gambarPlayer = document.getElementById("gambarPlayer");

// AKHIR section gambar player

// JUDUL BESAR - Generate logika ai
const fight = document.getElementById("fight");

const showPilihanAi = document.getElementById("showPilihanAi");

const gambarAi = document.getElementById("gambarAi");

let jumlahRonde = document.getElementById("jumlahRonde");

let ronde = 0;

fight.onclick = fightHard;

function aiMilih() {
    if (document.getElementById("showKamu").innerHTML == "Kamu") {
        alert("Silahkan pilih opsi suit-nya dulu, baru pencet fight... gimana sih lu, gak liat atau apa? tinggal mencet aja susah.");
    } else {
        let angkaAcak = Math.random();
        let pilihanAi;
        if (angkaAcak < 0.33) {
            gambarAi.setAttribute("src", "img/batu-kiri.jpg");
            pilihanRealAi = pilihanAi = "batu";
        } else if (angkaAcak < 0.66) {
            gambarAi.setAttribute("src", "img/kertas-kiri.jpg");
            pilihanRealAi = pilihanAi = "kertas";
        } else {
            gambarAi.setAttribute("src", "img/gunting-kiri.jpg");
            pilihanRealAi = pilihanAi = "gunting";
        }

        showPilihanAi.innerHTML = pilihanAi;
        ronde++;
        jumlahRonde.innerHTML = ronde;

        document.getElementById("showAi").innerHTML = pilihanAi;
    }
}
// showAi AKHIR - Generate logika ai

/* JUDUL BESAR - Cek pilihan
if (document.getElementById("showKamu").innerHTML == "Kamu") {
    alert("PILIH DULu");
}
AKHIR - Cek pilihan */

// JUDUL BESAR - LOGIKA GAME

// let pilihanRealKamu;
// let pilihanRealAi;

let skorRealKamu = document.getElementById("skorPlayer");
let skorRealAi = document.getElementById("skorAi");
let papanHasil = document.getElementById("hasil");

let skorKamu = 0;
let skorAi = 0;

function gameLogic() {
    /*
    batu > gunting > kertas > batu
    */
    if (pilihanRealKamu == "batu") {
        if (pilihanRealAi == "batu") {
            papanHasil.innerHTML = "SERI!";
        } else if (pilihanRealAi == "kertas") {
            papanHasil.innerHTML = "KAMU KALAH";
            skorAi++;
        } else if (pilihanRealAi == "gunting") {
            papanHasil.innerHTML = "KAMU MENANG!";
            skorKamu++;
        }
    } else if (pilihanRealKamu == "kertas") {
        if (pilihanRealAi == "batu") {
            papanHasil.innerHTML = "MENANG CUY!";
            skorKamu++;
        } else if (pilihanRealAi == "kertas") {
            papanHasil.innerHTML = "DRAW";
        } else if (pilihanRealAi == "gunting") {
            papanHasil.innerHTML = "KALAH COEG";
            skorAi++;
        }
    } else if (pilihanRealKamu == "gunting") {
        if (pilihanRealAi == "batu") {
            papanHasil.innerHTML = "KALAH CUY";
            skorAi++;
        } else if (pilihanRealAi == "kertas") {
            papanHasil.innerHTML = "MENANG SLUR!";
            skorKamu++;
        } else if (pilihanRealAi == "gunting") {
            papanHasil.innerHTML = "IMBANG";
        }
    }

    skorRealKamu.innerHTML = skorKamu;
    skorRealAi.innerHTML = skorAi;
}

function fightHard() {
    aiMilih();
    gameLogic();
}

// AKHIR - LOGIKA GAME
