import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protection-plan',
  templateUrl: './protection-plan.component.html',
  styleUrls: ['./protection-plan.component.scss']
})
export class ProtectionPlanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;

  protection_plan_1 = false;
  protection_plan_2 = false;
  protection_plan_3 = false;
  protection_plan_4 = false;
  protection_plan_5 = false;

  protectionPlan1(){
    this.protection_plan_1 = true;
    this.protection_plan_2 = false;
    this.protection_plan_3 = false;
    this.protection_plan_4 = false;
    this.protection_plan_5 = false;

    this.isCollapsed1 = !this.isCollapsed1;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
  }

  protectionPlan2(){
    this.protection_plan_1 = false;
    this.protection_plan_2 = true;
    this.protection_plan_3 = false;
    this.protection_plan_4 = false;
    this.protection_plan_5 = false;

    this.isCollapsed1 = true;
    this.isCollapsed2 = !this.isCollapsed2;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
  }

  protectionPlan3(){
    this.protection_plan_1 = false;
    this.protection_plan_2 = false;
    this.protection_plan_3 = true;
    this.protection_plan_4 = false;
    this.protection_plan_5 = false;

    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = !this.isCollapsed3;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
  }

  protectionPlan4(){
    this.protection_plan_1 = false;
    this.protection_plan_2 = false;
    this.protection_plan_3 = false;
    this.protection_plan_4 = true;
    this.protection_plan_5 = false;

    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = !this.isCollapsed4;
    this.isCollapsed5 = true;
  }

  protectionPlan5(){
    this.protection_plan_1 = false;
    this.protection_plan_2 = false;
    this.protection_plan_3 = false;
    this.protection_plan_4 = false;
    this.protection_plan_5 = true;

    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = !this.isCollapsed5;
  }

  goBackTo() {
    this.router.navigate(['dashboard/storage/storing-type']);
  }

  goToNext() {
    this.router.navigate(['dashboard/storage/payment-info']);
  }

}
