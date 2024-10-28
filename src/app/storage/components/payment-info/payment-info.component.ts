import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext() {
    this.router.navigate(['dashboard/storage/reservation-successfull']);
  }

}
