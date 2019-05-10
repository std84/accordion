import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-farmitems',
  templateUrl: './farmitems.component.html',
  styleUrls: ['./farmitems.component.css']
})
export class FarmitemsComponent implements OnInit {

  
  @Input() item = "";
  @Output() close = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  checkminmax(item ) {



    item.PriceAvgdis = item.PriceAMax > 0 || item.PriceAMin > 0 ;
    console.log(item);
  }
  checkavg(item){

    item.priceAmindis = item.PriceAAvg > 0;
    item.priceAmaxdis = item.PriceAAvg > 0;
    console.log(item);
  }
}
