import { Component, OnInit } from '@angular/core';
import { DataTableCol } from 'src/app/models/datatable-col';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienti-page',
  templateUrl: './clienti-page.component.html',
  styleUrls: ['./clienti-page.component.scss']
})
export class ClientiPageComponent implements OnInit {

  public cols:DataTableCol[];
  public data:Cliente[] = [];
  public currentCliente:Cliente;

  
  constructor(public clienteService:ClienteService,private router:Router) { }

  ngOnInit() {
    this.cols = [
      new DataTableCol("Nome", "name"),
      new DataTableCol("Cognome", "cognome"),
      new DataTableCol("Eta", "eta")
    ]

   this.clienteService.getAllCliente().subscribe(x=>{
     this.data = x;
   })
  }

  deleteRow(value:Cliente){
    this.data = this.clienteService.deleteByid(value.id);
  }
  
  selectRow(event){
    this.router.navigate(["clienti",event.id])
  }

}
