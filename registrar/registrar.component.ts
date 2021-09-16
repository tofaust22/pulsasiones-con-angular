import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
persona:Persona;
  constructor(private service:PersonaService) { }

  ngOnInit(): void {
    this.persona=new Persona();
  }
  guardar(){
    this.persona.calcularPulsacion()
    this.service.guardar(this.persona);
    alert("se ha registrado correctamente"+" la pulsacion es: "+this.persona.pulsacion);
  }


}
