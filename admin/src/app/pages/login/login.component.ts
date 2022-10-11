import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:  FormBuilder,
    private user: UserService,
    private datastorage: DataService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  isLogin: boolean = false
  isLoading: boolean = false

  ngOnInit(): void {
    // this.isLoading = true
    // this.isLogin = false

    // const cookieString = document.cookie
    // const cookies = cookieString.split(";")
    // let token = null

    // cookies.forEach(cookie => {
    //   const singleCookie = cookie.split("=")
    //   if(singleCookie[0] == "token") {
    //     token = singleCookie[1]
    //   }
    // })

    // if(token) {
    //   this.user.isValidToken(token).subscribe(data => {
    //     if(data.valid) {
    //       this.isLoading = false
    //       this.isLogin = true
    //     }
    //     else {
    //       this.isLoading = false
    //     }
    //   })
    // }
    // else {
    //   this.isLoading = false
    // }
  }

  login() {
    const email: any = this.loginForm.value.email
    const password: any = this.loginForm.value.password
    
    this.user.login(email, password).subscribe(data => {
      
      this.datastorage.setData(data)

      this.router.navigate(["/dashboard"])
    })
  }

}
