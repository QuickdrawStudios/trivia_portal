import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { PaymentService } from '../../services/payment/payment.service'

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  providers: [ PaymentService ]
})
export class SubscribeComponent implements OnInit {

  private number: string;
  private expMonth: string;
  private expYear: string;
  private cvc: string;

  private errorMessage: string = "";
  private showAlert: boolean = false;

  constructor( 
    private _paymentService: PaymentService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  getToken(){
    (<any>window).Stripe.createToken({
      "number": this.number,
      "exp_month": this.expMonth,
      "exp_year": this.expYear,
      "cvc": this.cvc
    },(status, token) => {
      let json = {"token": token.id}
      this._paymentService.subscribePay(json).subscribe(
        (response) => {
          if(response.status == 'ok'){
            this._router.navigateByUrl('/home');
          }
        },
        (err) => {
          this.errorMessage = err;
          this.showAlert = true;
        }
      );
    });
  }

}
