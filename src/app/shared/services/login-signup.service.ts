import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  public url = "http://localhost:3000";
  constructor(httpClient: HttpClient, private apiService: ApiService) { }
  authLogin(user_name: any, password: any): Observable<any> {
    return this.apiService.get(this.url + '/user?email=' + user_name + '&password=' + password)
  }
  userRegistration(user_detail:any):Observable<any>{
    return this.apiService.post(this.url,user_detail)
  }
  adminLogin(user_name: any, password: any): Observable<any> {
    return this.apiService.get(this.url + '/user?email=' + user_name + '&password=' + password+'&role=admin')
  }
}
