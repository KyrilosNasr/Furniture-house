import { Component, OnInit } from '@angular/core';
import { FurnituresService } from 'src/app/Services/furnitures.service';
import { Good } from '../../Interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods: Good[] = [];

  constructor(private fs: FurnituresService) {}

  ngOnInit(): void {
    this.fs.getFurnitures().subscribe((d) => {
      this.goods = d;
    });
  }

  addToCart(index: any) {
    console.log('addToCart ', this.goods[index]);
  }
}
