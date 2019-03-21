import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }

  getUserById(id:string):Observable<any>{
    return this.api.get("/user/"+ id);
  }
}
