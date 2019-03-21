import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {
  cliente:any;
  constructor(private route:ActivatedRoute,private clienteService:ClienteService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    const id = this.route.snapshot.params.id;
    this.clienteService.getClienteById(id).subscribe(x=>{
      this.cliente = x;
      console.log(x)
    })

  }

}
