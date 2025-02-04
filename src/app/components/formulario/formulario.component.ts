import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/persona';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatIconModule, NgFor, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {

  listadoPersonas:Persona[] = [];

  private _snackBar = inject(MatSnackBar);

  saludar() {
    this._snackBar.open("Hola", "Cerrar", {
      duration: 2000,
    });
  }

  async obtenerPersonas() {
    this.personasService.servicioGetPersonas().subscribe({
      next: (response) =>{
        this.listadoPersonas = response;
      },
      error: (error) => {
        alert("Ha ocurrido un error al obtener los datos del servidor")
      }
    });
  }

  constructor() {}
  personasService = inject(PersonasService);

  ngOnInit(): void {

    this.obtenerPersonas();
    
    }

}
