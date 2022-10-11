import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver } from '../interfaces/Driver';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http: HttpClient,
    private data: DataService  
  ) { }

  apiURL: string = environment.apiURL

  getDrivers(): Observable<Driver[]>  {

    const cookies: any = this.data.getData()

    const headers = new HttpHeaders()
      .set("Content-type", "application/json")
      .set("Authorization", `Bearer ${cookies.token}`)

    return this.http.get<Driver[]>(`${this.apiURL}/driver/`, {headers: headers})
  }
}
