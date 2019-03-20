import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public data:Cliente[] = [
    new Cliente({nome:"mario", cognome:"rossi" , eta:40 , id:1}),
    new Cliente({nome:"marco", cognome:"rossi" , eta:40 , id:2}),
    new Cliente({nome:"anna", cognome:"rossi" , eta:40 , id:3}),
    new Cliente({nome:"carlo", cognome:"rossi" , eta:40 , id:4}),
    new Cliente({nome:"andrea", cognome:"rossi" , eta:40 , id:5}),
    new Cliente({nome:"carlo 1", cognome:"rossi" , eta:40 , id:6}),
    new Cliente({nome:"carlo 2", cognome:"rossi" , eta:40 , id:7}),
    new Cliente({nome:"carlo 3", cognome:"rossi" , eta:40 , id:8}),
    new Cliente({nome:"carlo 4", cognome:"rossi" , eta:40 , id:9}),
    new Cliente({nome:"carlo 5", cognome:"rossi" , eta:40 , id:10}),
    new Cliente({nome:"carlo 6", cognome:"rossi" , eta:40 , id:11}),
    new Cliente({nome:"carlo 7", cognome:"rossi" , eta:40 , id:12}),
    new Cliente({nome:"carlo 8", cognome:"rossi" , eta:40 , id:13}),
    new Cliente({nome:"carlo 9", cognome:"rossi" , eta:40 , id:14}),
    new Cliente({nome:"carlo 10", cognome:"rossi" , eta:40 , id:15}),
    new Cliente({nome:"carlo 12", cognome:"rossi" , eta:40 , id:16}),
    new Cliente({nome:"carlo 13", cognome:"rossi" , eta:40 , id:17}),
    new Cliente({nome:"carlo 14", cognome:"rossi" , eta:40 , id:18}),
    new Cliente({nome:"carlo 15", cognome:"rossi" , eta:40 , id:19}),
    new Cliente({nome:"carlo 16", cognome:"rossi" , eta:40 , id:20}),
    new Cliente({nome:"carlo 17", cognome:"rossi" , eta:40 , id:21}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:22}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:33}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:44}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:77}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:54}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:78}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:88}),
    new Cliente({nome:"carlo 14", cognome:"rossi" , eta:40 , id:123}),
    new Cliente({nome:"carlo 15", cognome:"rossi" , eta:40 , id:122}),
    new Cliente({nome:"carlo 16", cognome:"rossi" , eta:40 , id:125}),
    new Cliente({nome:"carlo 17", cognome:"rossi" , eta:40 , id:147}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:150}),
    new Cliente({nome:"carlo 18", cognome:"rossi" , eta:40 , id:198})
    
  ]
  constructor() { }

  deleteByid (id:number):Cliente[] {
    this.data = this.data.filter(item=> item.id != id);
    return this.data;
  }

  getAllCliente():Cliente[]{
    return this.data;
  }

  getClienteById(id:number):Cliente{
    return this.data.find(x=> x.id == id);
  }

  insertCliente(value:Cliente){
    this.data.push(value);
  }
}
