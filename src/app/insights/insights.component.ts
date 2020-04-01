import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  n = 1;
  nfib = 0;
  fibonacci: Array<number> = [0, 1];
  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  nextFibonacci() {
    if (this.n > 1) {
      this.fibonacci.push(this.fibonacci[this.n - 1] + this.fibonacci[this.n - 2]);
    }
    this.n += 1;
    this.nfib = this.fibonacci[this.n - 1];
  }

}
