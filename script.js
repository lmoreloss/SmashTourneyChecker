var fechaInicial = new Date(2021, 3, 17);
var fechaPasada = new Date(2021, 3, 17);
var fechaSig = new Date();
fechaSig.setUTCDate(fechaPasada.getUTCDate() + 2);
fechaSig.setUTCHours(6, 0, 0, 0);
var fechaActual = new Date();
var hay1v1 = false;
var onevone = document.getElementById("ov1");
var ffa = document.getElementById("FFA");
var bg = document.getElementById("imgBackground");
for (var i = 0; i < 100000; i++) {
    if (fechaActual.getTime() >= fechaPasada.getTime() && fechaActual.getTime() < fechaSig.getTime()) {
        if (hay1v1 == false) {
            console.log("Hay FFA");
            onevone.style.display = "none";
            ffa.style.display = "block";
            bg.style.backgroundImage = "url('ffa.jpg')";
            break;
        }
        else {
            console.log("Hay 1v1");
            onevone.style.display = "block";
            ffa.style.display = "none";
            bg.style.backgroundImage = "url('1v1.jpg')";
            break;
        }
    }
    fechaPasada.setUTCDate(fechaPasada.getUTCDate() + 2);
    fechaSig.setUTCDate(fechaSig.getUTCDate() + 2);
    fechaSig.setUTCHours(6, 0, 0, 0);
    if (hay1v1 == false) {
        hay1v1 = true;
    }
    else {
        hay1v1 = false;
    }
}
