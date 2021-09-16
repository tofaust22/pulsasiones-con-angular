import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  consultar(){
    var personas = []; 
     
    if (localStorage.getItem('personas') != null) {

        personas = JSON.parse(localStorage.getItem('personas'));
    }return personas
  }
  guardar(persona:Persona){
    let personas = this.consultar()
    persona.calcularPulsacion()
    personas.push(persona)
    localStorage.setItem("personas",JSON.stringify(personas));
  }
}
