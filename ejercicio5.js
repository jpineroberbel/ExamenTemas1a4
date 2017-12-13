var etiqueta;
var ultimoIntervalo;

function whatsapp()
{
    if (ultimoIntervalo)
        clearInterval(ultimoIntervalo);
    
    etiqueta.innerHTML = "Esta escribiendo...";
    ultimoIntervalo = setTimeout(acabaEscribir, 3000);
}

function acabaEscribir()
{
    etiqueta.innerHTML = "";
}

window.onload = function() {
    etiqueta = document.getElementById("etqWhatsApp");
}