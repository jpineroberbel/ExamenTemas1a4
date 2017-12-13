class gatito {
    
    constructor(imagenId, nombre)
    {
        var privado = 1;
        this.numClicks = 0;  
        this.nombre = nombre;
        this.imagen = imagenId;    

        this.borra = () =>  alert(privado) ;
        this.modificaprivado = (valor) =>  privado = valor ;

        this.otra = () => {
            alert (3*privado);
        }
    }



}
a = new gatito("j","j");
a.borra();