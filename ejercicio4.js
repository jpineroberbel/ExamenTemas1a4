function aplicaEstilos(idTabla)
{   
    let tabla = document.getElementById(idTabla);

    if (tabla)
    {
        let filas = tabla.getElementsByTagName("tr");

        filas[0].style.color = "red";

        for (i=1; i< filas.length; i+=2)
            filas[i].style.backgroundColor = "green";

        for (i=2; i< filas.length; i+=2)
            filas[i].style.backgroundColor = "blue";   
    }
}