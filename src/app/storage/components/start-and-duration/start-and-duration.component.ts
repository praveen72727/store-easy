import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-start-and-duration',
  templateUrl: './start-and-duration.component.html',
  styleUrls: ['./start-and-duration.component.scss', '../../../../assets/sass/libs/datepicker.scss'],

})
export class StartAndDurationComponent implements OnInit {

  d3: any;
  popupModel2;



  model: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  startAndDurationForm: FormGroup;

  submitted: boolean = false;

  isEdit: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeStartAndDurationForm();
  }

    // Custom Day View Starts
    isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
    }
    // Custom Day View Ends

  initializeStartAndDurationForm(): void {
    this.startAndDurationForm = this.fb.group({
      startDate: ['', Validators.required],
      duration: ['about a year' , Validators.required]
    });
  }

  get f() {
    return this.startAndDurationForm.controls;
  }

  onSubmitStartAndDurationForm() {
    this.submitted = true;
    //this.leadGenNextInformationFormGroup.markAllAsTouched();

    if (this.startAndDurationForm.invalid) {
      return;
    }

    const formData = this.startAndDurationForm.value;

    const saveInfo: any = {
      startDate: formData.startDate,
      duration: formData.duration
    }

    this.onSaveStartAndDurationForm(saveInfo);

    // if (!this.isEdit) {
    //   this.onSaveStartAndDurationForm(saveInfo);
    // } else {
    //   this.onUpdateStartAndDurationForm(saveInfo);
    // }
    this.router.navigate(['dashboard/storage/storing-type']);
    
  }

  onSaveStartAndDurationForm(saveInfo: any){
    console.log("saveInfo",saveInfo)
  }

  onUpdateStartAndDurationForm(saveInfo: any){

  }

  // selectStorageType(){
  //   this.router.navigate(['dashboard/storage/storing-type']);
  // }

}
