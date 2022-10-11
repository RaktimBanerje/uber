import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiURL: String = environment.apiURL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this._apiURL}/admin/login`, {email, password})
  }

  isValidToken(token: string) {
    return this.http.post(`${this._apiURL}/admin/isLogin`, {token})
  }
}
