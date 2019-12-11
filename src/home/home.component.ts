import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataSource: Object;
 
  constructor() { 
    this.dataSource = {
      chart: {
        lowerLimit: "0",
        upperLimit: "900",
        majorTMNumber: "4",
        showValue: "1",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "550",
            code: "#F2726F"
          },
          {
            minValue: "550",
            maxValue: "650",
            code: "#FFD000"
          },
          {
            minValue: "650",
            maxValue: "700",
            code: "#00CDA5"
          },
          {
            minValue: "700",
            maxValue: "900",
            code: "#339DFF"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "715"
          }
        ]
      }
    };
  }
  
  
}
