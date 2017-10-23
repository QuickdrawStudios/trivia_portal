import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeLoginIfNotLoggedIn } from '../../utils/utils'
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [ UserService ]
})
export class DemoComponent implements OnInit {

  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    routeLoginIfNotLoggedIn(this._userService, this._router, this._router.url);
  }

}
