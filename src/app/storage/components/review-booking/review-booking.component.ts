import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.scss']
})
export class ReviewBookingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackTo() {
    this.router.navigate(['dashboard/storage/protection-plan']);
  }

  goToNext() {
    this.router.navigate(['dashboard/storage/booking-successfull']);
  }

}
