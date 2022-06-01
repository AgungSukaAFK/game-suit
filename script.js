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

fight.onclick = fightHard;

function aiMilih() {
    if (document.getElementById("showKamu").innerHTML == "Kamu") {
        alert("Silahkan pilih opsi suit-nya dulu untuk bisa memulai permainan :)");
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

// UPDATE 0.3
/* 
    !-- Game Suit v0.3 by AgungSukaAFK --!
    Update kali ini menyertakan:
    - Perbaikan bug
    - Optimisasi program
    - Pembaruan efisiensi logika game
    - Fitur baru "Kustom Nama"
    - Fitur baru "Kustom Ronde"
    - Fitur baru "Pop-up hasil pertandingan"
    - dll..
*/

const inputJumlahRonde = document.getElementById("inputJumlahRonde");
let rondeKustom = 0;

const showMaxRonde = document.getElementById("showMaxRonde");
let maxRonde = 10;
showMaxRonde.textContent = maxRonde;

const tombolRonde = document.getElementById("simpanRonde");
tombolRonde.addEventListener("click", function () {
    // alert(inputJumlahRonde.value);
    if (isNaN(inputJumlahRonde.value)) {
        alert("Kustom ronde harus berupa angka, MAX: 999 | MIN: 5");
    } else if (inputJumlahRonde.value == "") {
        alert("Inputnya jangan kosong lah...");
    } else {
        maxRonde = parseInt(inputJumlahRonde.value);
        showMaxRonde.textContent = maxRonde;
    }
});

let ronde = 0;

function fightHard() {
    if (ronde < maxRonde) {
        ronde++;
        aiMilih();
        gameLogic();
    } else {
        let winner = "";
        if (skorKamu > skorAi) {
            winner = `${namaPlayer.textContent} MENANG!`;
        } else if (skorKamu == skorAi) {
            winner = "DRAW";
        } else {
            winner = `${namaPlayer.textContent} KALAH... :(`;
        }

        alert(`Max ronde tercapai, Hasil: ${winner}`);
    }
}

// AKHIR - LOGIKA GAME

const namaPlayer = document.getElementById("namaPlayer");

let inputNamaKustom = document.getElementById("inputKustomNama");

const tombolNama = document.getElementById("simpanNama");
tombolNama.addEventListener("click", function () {
    if (inputNamaKustom.value == "") {
        alert("Nama kustom Maksimal 13 karakter, dan tidak boleh kosong!");
    } else {
        let namaKustom = inputNamaKustom.value;
        namaPlayer.textContent = namaKustom;
    }
});
