import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PaymentService {

  constructor( private _http: Http) { }

  public subscribePay(json: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem("token"));
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post('http://localhost:8080/subscribe', json, options)
      .map(response => response.json())
      .catch(error => Observable.throw (JSON.parse(error._body).response));
  }

}
