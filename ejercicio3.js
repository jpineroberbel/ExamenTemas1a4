// Ejemplo tal y como se dió por válido (sin miembros privados)
// En archivo ejercicio3Privado.js está como hacer miembros privados
class gato{

    constructor(nombre, edad, tamano, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.tamano = tamano;
        this.raza = raza;  

    }

    caracteristicas()
    {
        return `Me llamo ${this.nombre}, tengo ${this.edad} años, mido ${this.tamano} cm y soy un ${this.raza}.`
    }
}

class JaulaGatitos {
    constructor()
    {
        this.listaGatos = new Array();
    }

    anadirGato(gato)
    {
        this.listaGatos.push(gato);
    }

    buscarGato(nombreGato)
    {
        for (gato of this.listaGatos)
            if (gato.nombre == nombreGato)
                return gato.caracteristicas();
        
        return "No lo encuentro";
    }

    mostrarGatos(){
        let cadenaADevolver = `Contiene un total de ${this.listaGatos.length}. `;
        this.listaGatos.forEach(element => cadenaADevolver += element.caracteristicas());

        return cadenaADevolver;
    }
}