import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthAccessHeader } from 'src/app/module/auth-access/auth-access.module';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.BASE_URL
  headers = new AuthAccessHeader()

  constructor(private http:HttpClient) { }

  loginUser(data:Object):Observable<any>{
    return this.http.post(this.baseUrl+'auth/token/', data, {headers:this.headers.getAccessToken('plainHeader')})
  }
}
