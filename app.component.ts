import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formfields';
  name = "bla bla bla";

  showIt = false;
  fields = [{"id":1,"Description":"מיני אפרסמון","TaskId":1,"ProductId":1,"PriceAMin":0,"PriceAMax":0,"PriceAAvg":0,"IsExceptionalPriceAMin":0,"IsExceptionalPriceAMax":false,"IsExceptionalPriceAAvg":false,"PricePMin":0,"PricePMax":0,"PricePAvg":0,"IsExceptionalPricePMin":false,"IsExceptionalPricePMax":false,"IsExceptionalPricePAvg":false,"priceAmaxdis":false,"priceAmindis":false,"PriceAvgdis":false},{"id":2,"Description":"גדול אפרסמון","TaskId":1,"ProductId":1,"PriceAMin":0,"PriceAMax":0,"PriceAAvg":0,"IsExceptionalPriceAMin":0,"IsExceptionalPriceAMax":false,"IsExceptionalPriceAAvg":false,"PricePMin":0,"PricePMax":0,"PricePAvg":0,"IsExceptionalPricePMin":false,"IsExceptionalPricePMax":false,"IsExceptionalPricePAvg":false,"priceAmaxdis":false,"priceAmindis":false,"PriceAvgdis":false}];
  Login(){
    console.log(this.fields);
  }
  onKey($event,id) {
    console.log($event);
  }

  showModal() {
      this.showIt = true;
  }
  closeModal(newName: string) {
      this.showIt = false;
      if (newName) this.name = newName;
  }
  checkminmax(item ) {

    for(var i = 0; i < this.fields.length; i++)
      console.log(this.fields[i]);

    item.PriceAvgdis = item.PriceAMax > 0 || item.PriceAMin > 0 ;
    console.log(item);
  }
  checkavg(item){
  
    for(var i = 0; i < this.fields.length; i++)
    console.log( this.fields[i]);

    item.priceAmindis = item.PriceAAvg > 0;
    item.priceAmaxdis = item.PriceAAvg > 0;
    console.log(item);
  }
}

