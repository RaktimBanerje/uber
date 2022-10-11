import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  setData(data: any) {
    if(data.token) {
      document.cookie = `token=${data.token}`
    }
  }

  getData() {
    const cookieString = document.cookie
    const cookies = cookieString.split(";")
    
    let data = {}

    cookies.forEach(cookie => {
      const key   = cookie.split("=")[0]
      const value = cookie.split("=")[1]
      data = {...data, [key] : value}
    })

    return data
  }
}
