import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

interface Room {
  adults: number;
  children: number;
}

@Component({
  selector: 'app-search-hosts',
  templateUrl: './search-hosts.component.html',
  styleUrls: ['./search-hosts.component.scss', '../../../../assets/sass/libs/datepicker.scss', '../../../../assets/sass/libs/select.scss'],
  providers: [NgbPaginationConfig], // add NgbPaginationConfig to the component providers
  encapsulation: ViewEncapsulation.None
})
export class SearchHostsComponent implements OnInit {

  constructor(
    config: NgbPaginationConfig,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // customize default values of paginations used by this component tree
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }

    // Variable Declaration for pagination
    page = 1;
    page1 = 1;
    page2 = 1;
    page3 = 1;
    page4 = 1;
    page5 = 1;
    page6 = 1;
    page7 = 1;
    currentPage = 2;
    currentPage1 = 2;
    currentPage2 = 2;
    isDisabled1 = true;

    // Toggle Disabled
    toggleDisabled() {
      this.isDisabled1 = !this.isDisabled1;
    }

    // Variable declaration for datepicker
    d: any;
    d2: any;
    d3: any;
    model: NgbDateStruct;
    popupModel1;
    popupModel2;
    date: { year: number, month: number };
    displayMonths = 2;
    navigation = 'select';
    //  disabledModel: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    disabled = true;
    customModel: NgbDateStruct;

    configModal;    // Global configuration of datepickers


    cities = [
      { id: 1, name: 'Toronto' },
      { id: 2, name: 'Vancouver' },
      { id: 3, name: 'Montreal' },
      { id: 4, name: 'Calgary' },
      { id: 5, name: 'Ottawa' },
      { id: 6, name: 'Edmonton' },
      { id: 7, name: 'Quebec City' },
      { id: 8, name: 'Winnipeg' },
      { id: 9, name: 'Halifax' },
      { id: 10, name: 'Victoria' }
    ];

    selectedCity: string = "Toronto";

    showDatePicker: boolean = false;

    selectedButton: string = 'self';

    toggleDatePicker() {
      this.showDatePicker = !(this.showDatePicker);
    }

    // Price Range Filter Logic Start

  // Price per night filter properties
  under2000Selected: boolean = false;
  range2000to4000Selected: boolean = false;
  range4000to6000Selected: boolean = false;
  above6000Selected: boolean = false;

  // star category filter properties
  fiveStarSelected: boolean = false;
  fourStarSelected: boolean = false;
  threeStarSelected: boolean = false;

  noHotelsToDisplay: boolean = false;

  displayResults: boolean = true;
  showResults() {
    this.displayResults = !(this.displayResults);
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  filterHotelsMethod() {
    const filtered = this.Hotels_Data.filter(hotel => {
      const priceCondition =
        (!this.under2000Selected && !this.range2000to4000Selected && !this.range4000to6000Selected && !this.above6000Selected) ||
        (this.under2000Selected && hotel.price < 100) ||
        (this.range2000to4000Selected && hotel.price >= 100 && hotel.price < 200) ||
        (this.range4000to6000Selected && hotel.price >= 200 && hotel.price < 300) ||
        (this.above6000Selected && hotel.price >= 300);

      const starRatingCondition =
        (!this.fiveStarSelected && !this.fourStarSelected && !this.threeStarSelected) ||
        (this.fiveStarSelected && hotel.starRating === 5) ||
        (this.fourStarSelected && hotel.starRating === 4) ||
        (this.threeStarSelected && hotel.starRating === 3);

      return priceCondition && starRatingCondition;

    });

    this.noHotelsToDisplay = filtered.length === 0;

    console.log(filtered.length);
    this.filteredHotels = filtered;
    return filtered;
  }

  // Price Range Filter Logic End



  Hotels_Data = [
    {
      id: 1, hotelName: 'Unpaved Lot | 30x10', bigImg: '/assets/img/storages-images/unpaved-lot-1-img-1.jpeg', thumbImg1: '/assets/img/storages-images/unpaved-lot-1-img-1.jpeg', thumbImg2: '/assets/img/storages-images/unpaved-lot-1-img-2.jpeg', thumbImg3: '/assets/img/storages-images/unpaved-lot-1-img-3.jpeg', thumbImg4: '/assets/img/storages-images/unpaved-lot-1-img-4.jpeg', location: 'North York, Toronto, ON | 1.5 km from CN Tower', price: 100, ratings: 338, showHeartSymbol: true, starRating: 5, badgeRating: 4.5, storageType: 'Parking'
    },
    {
      id: 2, hotelName: 'Garage | 15x10', bigImg: 'assets/img/storages-images/garage-1-img-1.jpeg', thumbImg1: 'assets/img/storages-images/garage-1-img-1.jpeg', thumbImg2: 'assets/img/storages-images/garage-1-img-2.jpeg', thumbImg3: 'assets/img/storages-images/garage-1-img-3.jpeg', thumbImg4: 'assets/img/storages-images/garage-1-img-4.jpeg', location: 'Scarborough, Toronto, ON | 1.2 km from Bluffer’s Park', price: 225, ratings: 613, showHeartSymbol: true, starRating: 4, badgeRating: 4.0, storageType: 'Storage'
    },
    {
      id: 3, hotelName: 'Parking Lot | 20×10', bigImg: '/assets/img/storages-images/parking-lot-1-img-1.jpeg', thumbImg1: '/assets/img/storages-images/parking-lot-1-img-1.jpeg', thumbImg2: '/assets/img/storages-images/parking-lot-1-img-2.jpeg', thumbImg3: '/assets/img/storages-images/parking-lot-1-img-3.jpeg', thumbImg4: '/assets/img/storages-images/parking-lot-1-img-4.jpeg', location: 'Chinatown, Toronto, ON | 1.8 km from CN Tower', price: 39, ratings: 530, showHeartSymbol: true, starRating: 3, badgeRating: 3.0, storageType: 'Parking'
    },
    {
      id: 4, hotelName: 'Driveway | 15x27', bigImg: 'assets/img/storages-images/driveway-1-img-1.jpeg', thumbImg1: 'assets/img/storages-images/driveway-1-img-1.jpeg', thumbImg2: 'assets/img/storages-images/driveway-1-img-2.jpeg', thumbImg3: 'assets/img/storages-images/driveway-1-img-3.jpeg', thumbImg4: 'assets/img/storages-images/driveway-1-img-4.jpeg', location: 'Yorkville, Toronto, ON | 2.1 km from Queens Park', price: 120, ratings: 226, showHeartSymbol: true, starRating: 4, badgeRating: 4.0, storageType: 'Parking'
    },
    {
      id: 5, hotelName: 'Carport | 19x9', bigImg: '/assets/img/storages-images/carport-1-img-1.jpg', thumbImg1: '/assets/img/storages-images/carport-1-img-1.jpg', thumbImg2: '/assets/img/storages-images/carport-1-img-2.jpg', thumbImg3: '/assets/img/storages-images/carport-1-img-3.jpg', thumbImg4: '/assets/img/storages-images/carport-1-img-4.jpg', location: 'Liberty Village, Toronto, ON | 2.4 km from Budweiser Stage', price: 110, ratings: 171, showHeartSymbol: true, starRating: 4, badgeRating: 4.5, storageType: 'Parking'
    },
  ]

  filteredHotels = this.Hotels_Data;

  updateBigImage(bigImg: string, thumbImg: string) {
    for (const hotel of this.Hotels_Data) {
      if (hotel.bigImg === bigImg) {
        hotel.bigImg = thumbImg;
        break;
      }
    }
  }


  toggleHeartsymbol(index: number) {
    this.Hotels_Data[index].showHeartSymbol = !(this.Hotels_Data[index].showHeartSymbol);
  }

  showFilterSection: string = "none";
  toggleFilterSection() {
    if (this.showFilterSection === "block") {
      this.showFilterSection = "none";
    } else {
      this.showFilterSection = "block";
    }

  }

  checkAvailability(){
    // this.router.navigate(['hotel-details']);
  }

}
