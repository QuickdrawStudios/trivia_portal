import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { routeLoginIfNotLoggedIn } from '../../utils/utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {

  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    routeLoginIfNotLoggedIn(this._userService, this._router, this._router.url);
  }

}
