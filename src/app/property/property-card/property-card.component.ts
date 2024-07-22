import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  property: any = {
    "Id": 1,
    "Name": "Birla house",
    "Type": "House",
    "price": 120000
  }
}
