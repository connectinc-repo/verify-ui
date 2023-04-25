import { HttpHeaders } from '@angular/common/http';

export class AuthAccessHeader {
  
  public token: any
  public username: any
  public token_expires: any

  constructor(){}

  getAccessToken(tokenType:string){
    let userToken = localStorage.getItem('Token')
    let tokens:any = {
      header : new HttpHeaders({ "Authorization": "Bearer " + userToken, "Content-Type": "application/json" }),
      formHeader : new HttpHeaders({ "Authorization": "Bearer " + userToken }),
      plainHeader : new HttpHeaders({ "Content-Type": "application/json" })
    }
    let token = tokens[tokenType]
    console.log(token)
    return token
  }

  storeAccessToken(token:any){
    this.token = token;
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.used_id;
    localStorage.setItem("Token", token)
  }

  refreshAccessToken(){

  }
}
