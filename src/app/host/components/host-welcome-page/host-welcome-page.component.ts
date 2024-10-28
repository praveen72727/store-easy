import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-welcome-page',
  templateUrl: './host-welcome-page.component.html',
  styleUrls: ['./host-welcome-page.component.scss']
})
export class HostWelcomePageComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  listYourSpace(){
    this.router.navigate(['dashboard/host/host-registration']);
  }

}
