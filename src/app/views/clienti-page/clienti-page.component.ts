import { Component, OnInit } from '@angular/core';
import { DataTableCol } from 'src/app/models/datatable-col';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-clienti-page',
  templateUrl: './clienti-page.component.html',
  styleUrls: ['./clienti-page.component.scss']
})
export class ClientiPageComponent implements OnInit {

  public cols:DataTableCol[];
  public data:Cliente[];
  public currentCliente:Cliente;

  
  constructor(public clienteService:ClienteService) { }

  ngOnInit() {
    this.cols = [
      new DataTableCol("Nome", "nome"),
      new DataTableCol("Cognome", "cognome"),
      new DataTableCol("Eta", "eta")
    ]

   this.data = this.clienteService.getAllCliente();
  }

  deleteRow(value:Cliente){
    this.data = this.clienteService.deleteByid(value.id);
  }
  
  selectRow(event){
    console.log(event)
     this.currentCliente = event;
     if(this.currentCliente){
      
     }
  }

}
