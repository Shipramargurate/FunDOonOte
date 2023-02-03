import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(private httpservice: HttpService) { }

  login(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('/user/login', data, false, headerOptions)
  }
  registration(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('/user/userSignUp', data, false, headerOptions)
  }
  resetpassword(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('/user/reset-password', data, false, headerOptions)
  }
  reset(data : any)
  {
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpservice.Post('/user/reset', data, false, headerOptions)
  }
}

