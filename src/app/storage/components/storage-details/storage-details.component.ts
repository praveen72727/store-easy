import { Component, OnInit, ViewEncapsulation , Input} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storage-details',
  templateUrl: './storage-details.component.html',
  styleUrls: ['./storage-details.component.scss', '../../../../assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StorageDetailsComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,) {

  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}

  ngOnInit(): void {
  }


  Hotels_Data = [
    {
      id: 1, hotelName: 'Hotel Boss Singapore', bigImg: 'assets/img/storages-images/garage-1-img-1.jpeg', thumbImg1: 'assets/img/storages-images/garage-1-img-1.jpeg', thumbImg2: 'assets/img/storages-images/garage-1-img-2.jpeg', thumbImg3: 'assets/img/storages-images/garage-1-img-3.jpeg', thumbImg4: 'assets/img/storages-images/garage-1-img-4.jpeg', location: 'Scarborough, Toronto, ON | 1.2 km from Bluffer’s Park', price: 20435, ratings: 4338, showHeartSymbol: true, starRating: 5, badgeRating: 4.5
    }
  ]


  updateBigImage(bigImg: string, thumbImg: string) {
    for (const hotel of this.Hotels_Data) {
      if (hotel.bigImg === bigImg) {
        hotel.bigImg = thumbImg;
        break;
      }
    }
  }

  // price_options = [
  //   { id: 1, price: '2 Adults & 2 Children' },
  //   { id: 2, price: '2 Adults & 1 Children' },
  // ];

  // selectedPriceOption: any = this.price_options[0];




  Selected_Rooms = [];

  TotalPriceOfAddedRooms=0;
  addRoom(index: number, roomTypeName: string, adultsANDchildren: string, roomPrice: number) {
    const roomToAdd: any[] = [index, roomTypeName, adultsANDchildren, roomPrice];
    this.Selected_Rooms.push(roomToAdd);
    console.log(this.Selected_Rooms);

    let total=0;
    for (var i = 0; i < this.Selected_Rooms.length; i++) {
      total = total + this.Selected_Rooms[i][3];
    }
    this.TotalPriceOfAddedRooms=total;
    console.log(this.TotalPriceOfAddedRooms);

  }

  removeAddedRoom(item: any) {
    const index = this.Selected_Rooms.indexOf(item);
    if (index !== -1) {
      this.Selected_Rooms.splice(index, 1);
      let total=0;
      for (var i = 0; i < this.Selected_Rooms.length; i++) {
        total = total + this.Selected_Rooms[i][3];
      }
      this.TotalPriceOfAddedRooms=total;
      console.log(this.TotalPriceOfAddedRooms);
    }
  }

  Select_Room: any[][] =
    [
      [
        [
          { roomTypeName: "Standard Room", roomSize: "344 sq.ft", typeOfBed: "SingleBed", roomTypeImgSrc: "assets/img/gallery/hotel_images/room_type_1.jpg" }, "Free Wi-Fi",
          "Balcony", "City view", "Pool with a view", "Air conditioning", "Private Bathroom", "Flat-screen TV"
        ],
        [
          [
            {
              roomOptionName: "Room With Free Cancellation", roomFeatures: ["Room Only", "Free Cancellation",], roomNotFeatures: ["No breakfast", "No Smoking"], price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 2941, newPrice: 2432 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 3323, newPrice: 2822 },
                { id: 3, price: '3 Adults & 1 Children', oldPrice: 3836, newPrice: 3367 },
              ]
            }
          ],
          [
            {
              roomOptionName: "Room With Free Cancellation | Breakfast", roomFeatures: ["Room Only", "Free Cancellation", "Free Breakfast"], roomNotFeatures: ["No Smoking"], roomPrice: { oldPrice: "₹ 3,284", newPrice: "₹ 2,745" }, price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 4450, newPrice: 3567 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 4989, newPrice: 3891 },
              ]
            }
          ],
        ],
      ],
      [
        [
          { roomTypeName: "Deluxe Room", roomSize: "456 sq.ft", typeOfBed: "DoubleBed", roomTypeImgSrc: "assets/img/gallery/hotel_images/room_type_2.jpg" }, "Free Wi-Fi",
          "Balcony", "City view", "Pool with a view", "Air conditioning", "Private Bathroom", "Flat-screen TV", "Soundproof", "Minibar", "Interconnected Room"
        ],
        [
          [
            {
              roomOptionName: "Room With Free Cancellation", roomFeatures: ["Room Only", "Free Cancellation",], roomNotFeatures: ["No breakfast", "No Smoking"], roomPrice: { oldPrice: "₹ 3,747", newPrice: "₹ 3,281" }, price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 5119, newPrice: 3992 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 5340, newPrice: 4120 },
              ]
            }
          ],
          [
            {
              roomOptionName: "Room With Free Cancellation | Breakfast", roomFeatures: ["Room Only", "Free Cancellation", "Free Breakfast"], roomNotFeatures: ["No Smoking"], roomPrice: { oldPrice: "₹ 4,257", newPrice: "₹ 3,733" }, price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 5549, newPrice: 4349 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 5843, newPrice: 4791 },
              ]
            }
          ],
          [
            {
              roomOptionName: "Room With Free Cancellation | Breakfast | Launch", roomFeatures: ["Room Only", "Free Cancellation", "Free Breakfast", "Free Launch"], roomNotFeatures: ["No Smoking"], roomPrice: { oldPrice: "₹ 4,757", newPrice: "₹ 4,529" }, price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 6267, newPrice: 5291 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 6674, newPrice: 5584 },
              ]
            }
          ]
        ],
      ],
      [
        [
          { roomTypeName: "Premium Deluxe Room", roomSize: "516 sq.ft", typeOfBed: "TripleBed", roomTypeImgSrc: "assets/img/gallery/hotel_images/room_type_3.jpg" }, "Free Wi-Fi",
          "Balcony", "City view", "Pool with a view", "Air conditioning", "Private Bathroom", "Flat-screen TV", "Soundproof", "Minibar", "Interconnected Room", "Electric Kettle", "Daily Housekeeping"
        ],
        [
          [
            {
              roomOptionName: "Room With Free Cancellation | Breakfast", roomFeatures: ["Room Only", "Free Cancellation", "Free Breakfast"], roomNotFeatures: ["No Smoking"], roomPrice: { oldPrice: "₹ 5,263", newPrice: "₹ 4,737" }, price_options: [
                { id: 1, price: '2 Adults & 1 Children', oldPrice: 6891, newPrice: 5943 },
                { id: 2, price: '2 Adults & 2 Children', oldPrice: 7452, newPrice: 6389 },
              ]
            }
          ],
        ],
      ]
    ]

  amenities =
    [
      [
        { amenityName: "Highlighted Amenities" }, "Swimming Pool", "Gym", "Kids Play Area", "Vending Machine"
      ],
      [
        { amenityName: "Basic Facilities" }, "Swimming Pool", "Vending Machine", "Bathroom", "Room Service", "Power Backup", "Elevator/Lift", "Telephone", "Refrigerator", "Housekeeping", "Umbrellas", "Laundromat", "Laundry Service", "Air Conditioning", "Paid Parking", "Free Wi-Fi", "Smoke Detector", "Mineral Water", "Free Parking"
      ],
      [
        { amenityName: "Transfers" }, "Paid Airport Transfers",
      ],
      [
        { amenityName: "Family and kids" }, "Kids Play Area"
      ],
      [
        { amenityName: "Food and Drinks" }, "Cafe", "Dining Area", "Bar", "Restaurant"
      ],
      [
        { amenityName: "Payment Services" }, "ATM", "Currency Exchange"
      ],
      [
        { amenityName: "Safety and Security" }, "CCTV", "Fire Extinguishers", "Safe", "Security alarms"
      ],
      [
        { amenityName: "Health and wellness" }, "Gym", "First-aid Services"
      ],
      [
        { amenityName: "General Services" }, "Luggage Storage", "Concierge", "Multilingual Staff", "Luggage Assistance", "Ticket/Tour Assistance", "Bellboy Service", "Wake-up Call", "Wheelchair accessible", "Pool/ Beach towels"
      ]
    ]

    Hotel_Images_Gallery=
    [
      ["assets/img/storages-images/garage-1-img-1.jpeg"],
      ["assets/img/storages-images/garage-1-img-2.jpeg"],
      ["assets/img/storages-images/garage-1-img-3.jpeg"],
      ["assets/img/storages-images/garage-1-img-4.jpeg"],
      ["assets/img/storages-images/garage-1-img-4.jpeg"],
      ["assets/img/storages-images/garage-1-img-3.jpeg"],
      ["assets/img/storages-images/garage-1-img-2.jpeg"],
      ["assets/img/storages-images/garage-1-img-1.jpeg"],
      ["assets/img/storages-images/garage-1-img-2.jpeg"],
      ["assets/img/storages-images/garage-1-img-1.jpeg"],
      ["assets/img/storages-images/garage-1-img-4.jpeg"],
      ["assets/img/storages-images/garage-1-img-3.jpeg"],
    ]


    ReviewSelection(){
      this.router.navigate(['booking']);
    }

}
