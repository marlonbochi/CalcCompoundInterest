import { Component } from '@angular/core';
import { Values } from '../values';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    depositValue: number;
    interest: number;
    monthCalculate: number;
    items: Array<Values> = [];

    constructor() {     
    }
    

    calculate() {
        let valueOld = 0;
        let newValue = this.depositValue;

        this.items = [];
        
        for (let index = 0; index < this.monthCalculate; index++) {
          const value = new Values();
          let added = Math.round((newValue * (this.interest / 100) * 100)) / 100;
          newValue = Math.round((newValue + added) * 100) / 100;
          
          value.old = valueOld;
          value.month = index + 1;
          value.added = added;
          value.new = newValue;

          valueOld = newValue;

          this.items.push(value);
        }
    }
}
