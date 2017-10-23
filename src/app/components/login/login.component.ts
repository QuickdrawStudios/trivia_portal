import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { routeHomeIfLoggedIn } from '../../utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})

export class LoginComponent implements OnInit {

  private email: string = "";
  private password: string = "";

  private errorMessage: string = "";
  private showAlert: boolean = false;
  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    routeHomeIfLoggedIn(this._userService, this._router);
  }

  login(){
    let authentication = {"email": this.email, "password": this.password}
    this._userService.authenticate(authentication).subscribe(
      response => {
        if(response.status == "ok") {
          localStorage.setItem("token", response.message.token);
          if(!response.message.active) {
            this._router.navigateByUrl('/demo');
          } else {
            this._router.navigateByUrl('/home');
          }
        } else {
          console.log(response);
        }
      },
      err => {
        this.errorMessage = err;
        this.showAlert = true;
      });      
  }

}
