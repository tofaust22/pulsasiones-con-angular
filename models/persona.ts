export class Persona {
    identificacion: string;
    nombre: string;
    edad: number;
    genero: string;
    pulsacion: number;

    constructor(){

    }
    calcularPulsacion(){
       
        if(this.genero === "Masculino"){
            this.pulsacion=(220-this.edad)/10;
        } else{
            this.pulsacion=(210-this.edad)/10;
        }
       
    }
}
