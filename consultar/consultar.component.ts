import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  personas=[]
  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.personas=this.service.consultar()
  }

}
