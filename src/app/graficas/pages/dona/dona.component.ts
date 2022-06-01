import { Component} from '@angular/core';
import { ChartType, ChartData} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [`



  `]
})
export class DonaComponent{

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 300, 100  ],
      backgroundColor: ['#0D2BFF','#0CD5E8', '#C000EB', '#E80C2C' ] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }





}
