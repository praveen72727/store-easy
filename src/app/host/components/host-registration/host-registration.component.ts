import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import * as swalFunctions from '../../../shared/data/sweet-alerts';

const URL = '';

@Component({
  selector: 'app-host-registration',
  templateUrl: './host-registration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./host-registration.component.scss', '../../../../assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HostRegistrationComponent implements OnInit {

  swal =  swalFunctions;

  selectedSecurityIds: string[];
  selectedQualityIds: string[];
  selectedConvenienceIds: string[];
  selectedAccessibilityIds: string[];

  security = [
    { id: 1, name: 'Locked area' },
    { id: 2, name: 'Security camera monitored' },
    { id: 3, name: 'Smoke detectors' },
    { id: 4, name: 'Private space' }
  ];

  quality = [
    { id: 1, name: 'Private entrance' },
    { id: 2, name: 'Climate controlled' },
    { id: 3, name: 'Smoke free' },
    { id: 4, name: 'Pet free' }
  ];

  convenience = [
    { id: 1, name: 'Electricity available' },
    { id: 2, name: 'EV chargin available' },
    { id: 3, name: 'Shuttle service' },
    { id: 4, name: 'Car wash (self service)' }
  ];

  accessibility = [
    { id: 1, name: 'No stairs' },
    { id: 2, name: 'Elevator' },
    { id: 3, name: 'Wheelchair accessible' }
  ];

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  // hasAnotherDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  // fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackTo() {
    this.router.navigate(['dashboard/host/become-a-host']);
  }

  goToNext(){
    this.router.navigate(['dashboard/host/host-registration']);
  }

}
