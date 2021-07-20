import { Component, OnInit } from '@angular/core';
import { Good } from '../../Interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods: Good[] = [
    { name: 'bed', price: 6000, photoUrl: 'assets/Frnitures/bed.jfif' },
    {
      name: 'classy bed',
      price: 5000,
      photoUrl: '../../../assets/Frnitures/classy bed.jfif',
    },
    {
      name: 'dinning room',
      price: 6000,
      photoUrl: '../../../assets/Frnitures/dinning room.jfif',
    },
    {
      name: 'Ergonomic Computer Chair',
      price: 50000,
      photoUrl: '../.././../assets/Frnitures/Ergonomic Computer Chair.jpg',
    },
    {
      name: 'kid bed',
      price: 30000,
      photoUrl: '../.././../assets/Frnitures/kid bed.jpg',
    },
    {
      name: 'office',
      price: 9000,
      photoUrl: '../.././../assets/Frnitures/office.jfif',
    },
    {
      name: 'compact kitchen',
      price: 9000,
      photoUrl: '../.././../assets/Frnitures/compact kitchen.jfif',
    },
    {
      name: 'smart bathroom',
      price: 9000,
      photoUrl: '../.././../assets/Frnitures/smart bathroom.jfif',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(index: any) {
    console.log('addToCart ', this.goods[index]);
  }
}
