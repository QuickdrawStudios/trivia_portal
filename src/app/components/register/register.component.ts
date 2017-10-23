import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {

  private email: string = "";
  private password: string = "";
  private confirmPassword: string = "";


  private errorMessage: string = "";
  private showAlert: boolean = false;

  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  register(){
    if(this.password == this.confirmPassword){
      let json = {
        "email": this.email,
        "password": this.password
      }
      this._userService.register(json)
        .subscribe(
          response => {
            if(response.status == "ok"){
              localStorage.setItem("token", response.message.token);
              this._router.navigateByUrl('/demo');
            } else {
              console.log(response);
            }
          }, err => {
            this.errorMessage = err;
            this.showAlert = true;
          });
    } else {

    }
  }

}
