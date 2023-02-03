import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = "http://fundoonotes.incubation.bridgelabz.com/api"
  constructor(private http: HttpClient) { }

  Post(url: string, data: any, token: boolean = false, headersoption: any) {
    return this.http.post(this.baseurl + url, data, token && headersoption)
  }
Get(url: string, token: boolean = false, headersoption: any){
  return this.http.get(this.baseurl + url, token && headersoption)
}
delete(url: string, token: boolean = false, headersoption: any){
  return this.http.get(this.baseurl + url, token && headersoption)
}
}
