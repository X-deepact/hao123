import { Component } from '@angular/core';
import { TopCarBrands } from 'src/app/data/cartab-demo-data';
import { CarBrandType } from 'src/app/types/car_brand';

@Component({
  selector: 'app-cartab',
  templateUrl: './cartab.component.html',
  styleUrls: ['./cartab.component.css']
})
export class CartabComponent {
  topNewCars: any = []; //新车上市
  topSaleRanking: any = []; //有驾销量榜
  topPopularRank: any = []; // 有驾人气榜
  topCarBrands: CarBrandType[] = TopCarBrands;

}
