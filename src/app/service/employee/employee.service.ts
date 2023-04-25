import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthAccessHeader } from 'src/app/module/auth-access/auth-access.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.BASE_URL
  headers = new AuthAccessHeader()
  
  constructor(private http:HttpClient) { }

  onBoardEmployee(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.baseUrl+'employee/onboard/',data,{headers:this.headers.getAccessToken('formHeader')})
  }

}
