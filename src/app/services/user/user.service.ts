import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../models/user/user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {

  constructor( private _http: Http) { }

  public register(json: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post('http://localhost:8080/user', json, options)
      .map(response => response.json())
      .catch(error => Observable.throw (JSON.parse(error._body).response));
  }

  public authenticate(json: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post('http://localhost:8080/login', json, options)
      .map(response => response.json())
      .catch(error => Observable.throw (JSON.parse(error._body).response));
  } 

  public getAuthenticatedUser(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem("token"));
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8080/user' , options)
      .map(response => response.json())
      .catch(error => Observable.throw (JSON.parse(error._body).response)
      );
  }

}
