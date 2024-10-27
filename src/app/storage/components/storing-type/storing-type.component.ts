import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storing-type',
  templateUrl: './storing-type.component.html',
  styleUrls: ['./storing-type.component.scss']
})
export class StoringTypeComponent implements OnInit {

  test: boolean = false;

  bookingForm: FormGroup;
  selectedStorageType: string | null = null;
  rvMode: 'drivable' | 'towable' = 'drivable';

  storageTypes = ['Items', 'Vehicle', 'Trailer', 'RV/Camper', 'Boat', 'Oversized'];
  itemsList = '';
  vehicleTypes = ['Sedan', 'SUV', 'Truck', 'Compact', 'Motorcycle', 'Offroad/Snow'];
  trailerTypes = ['Cargo Trailer', 'Utility trailer', 'Travel trailer', 'Pop-up trailer'];
  rvTypesDrivable = ['Class A', 'Class B', 'Class C'];
  rvTypesTowable = ['Travel Trailer', 'Fifth Wheel', 'Pop-up Trailer', 'Truck Camper'];
  boatTypes = ['Class A', 'Class 1', 'Class 2', 'Class 3'];
  oversizedTypes = ['Cargo van', 'Large truck', 'Box truck', 'Bus', 'Semi truck'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      storageType: ['', Validators.required],
      itemsList: [''],
      vehicleType: [''],
      vehicleLength: [''],
      trailerType: [''],
      trailerLength: [''],
      rvType: [''],
      rvLength: [''],
      boatType: [''],
      boatLength: [''],
      oversizedType: [''],
      oversizedLength: ['']
    });
  }

  ngOnInit(): void {}

  selectStorageType(type: string): void {
    this.selectedStorageType = type;
    this.bookingForm.patchValue({
      storageType: type,
      itemsList: '',
      vehicleType: '',
      vehicleLength: '',
      trailerType: '',
      trailerLength: '',
      rvType: '',
      rvLength: '',
      boatType: '',
      boatLength: '',
      oversizedType: '',
      oversizedLength: ''
    });
  }

  selectVehicleType(type: string): void {
    const lengthMap: { [key: string]: number } = {
      'Sedan': 14,
      'SUV': 15,
      'Truck': 15,
      'Compact': 11,
      'Motorcycle': 7,
      'Offroad/Snow': 7
    };

    this.bookingForm.patchValue({
      vehicleType: type,
      vehicleLength: lengthMap[type]
    });
  }

  selectTrailerType(type: string): void {
    const lengthMap: { [key: string]: number } = {
      'Cargo Trailer': 8,
      'Utility trailer': 10,
      'Travel trailer': 20,
      'Pop-up trailer': 8
    };

    this.bookingForm.patchValue({
      trailerType: type,
      trailerLength: lengthMap[type]
    });
  }


  selectRVMode(mode: 'drivable' | 'towable'): void {
    this.rvMode = mode;
    this.bookingForm.patchValue({
      rvType: '',
      rvLength: ''
    });
  }

  getRVTypes(): string[] {
    return this.rvMode === 'drivable' ? this.rvTypesDrivable : this.rvTypesTowable;
  }

  selectRVType(type: string): void {
    const lengthMap: { [key: string]: number } = {
      'Class A': 29,
      'Class B': 17,
      'Class C': 25,
      'Travel Trailer': 20,
      'Fifth Wheel': 27,
      'Pop-up Trailer': 8,
      'Truck Camper': 15
    };

    this.bookingForm.patchValue({
      rvType: type,
      rvLength: lengthMap[type]
    });
  }

  selectBoatType(type: string): void {
    const lengthMap: { [key: string]: number } = {
      'Class A': 8,
      'Class 1': 16,
      'Class 2': 26,
      'Class 3': 40
    };

    this.bookingForm.patchValue({
      boatType: type,
      boatLength: lengthMap[type]
    });
  }

  selectOversizedType(type: string): void {
    const lengthMap: { [key: string]: number } = {
      'Cargo van': 15,
      'Large truck': 17,
      'Box truck': 20,
      'Bus': 30,
      'Semi truck': 53
    };

    this.bookingForm.patchValue({
      oversizedType: type,
      oversizedLength: lengthMap[type]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      this.router.navigate(['dashboard/storage/protection-plan']);
    }
  }

  goBackTo() {
    this.router.navigate(['dashboard/storage/start-and-duration']);
  }

  // goToNext() {
  //   this.router.navigate(['dashboard/storage/storing-type']);
  // }

}
