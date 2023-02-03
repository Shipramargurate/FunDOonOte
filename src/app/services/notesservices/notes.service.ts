import { HttpHeaders } from '@angular/common/http';
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any

  constructor(private httpservice: HttpService) {
  }
  createnote(data: any) {
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.Post('/notes/addNotes', data, true, headerOptions)
  }
  getAllNote() {
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.Get('/notes/getNotesList', true, headerOptions)
  }
  deletenote(payload : any){
    this.token = localStorage.getItem('token')
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.Post('/notes/trashNotes',payload, true, headerOptions)
  }
  }


