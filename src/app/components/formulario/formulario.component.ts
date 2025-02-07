import { Component, inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/persona';
import { NgFor, CommonModule } from '@angular/common';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule, MatPaginatorIntl, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatIconModule, CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit, AfterViewInit {

  


  listadoPersonas:Persona[] = [];
  dataSource = new MatTableDataSource<Persona>(this.listadoPersonas);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = "Filas por página:"
    this.paginator._intl.nextPageLabel = "Página siguiente"
    this.paginator._intl.previousPageLabel = "Página anterior"
    this.paginator._intl.lastPageLabel = "Última página"
    this.paginator._intl.firstPageLabel = "Primera página"
  }

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
        this.dataSource = new MatTableDataSource(this.listadoPersonas)
        this.dataSource.paginator = this.paginator;


        
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

    columns = [
      {
        columnDef: 'id',
        header: 'Id',
        cell: (element: Persona) => `${element.id}`,
      },
      {
        columnDef: 'nombre',
        header: 'Nombre',
        cell: (element: Persona) => `${element.nombre}`,
      },
      {
        columnDef: 'apellidos',
        header: 'Apellidos',
        cell: (element: Persona) => `${element.apellidos}`,
      },
      {
        columnDef: 'telefono',
        header: 'Teléfono',
        cell: (element: Persona) => `${element.telefono}`,
      },
      {
        columnDef: 'direccion',
        header: 'Dirección',
        cell: (element: Persona) => `${element.direccion}`,
      },
      {
        columnDef: 'foto',
        header: 'Foto',
        cell: (element: Persona) => `${element.foto}`,
      },

      {
        columnDef: 'fechaNacimiento',
        header: 'Fecha de Nacimiento',
        cell: (element: Persona) => `${element.fechaNacimiento}`,
      },
      {
        columnDef: 'idDepartamento',
        header: 'Departamento',
        cell: (element: Persona) => `${element.idDepartamento}`,
      }
    ];
    displayedColumns = this.columns.map(c => c.columnDef);

}
