import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [
        // 350, 450, 300, 100
       ],
      backgroundColor: [
        // '#0D2BFF','#0CD5E8', '#C000EB', '#E80C2C'
       ] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }


  ngOnInit(): void {

    // this.graficasService.getUsuarioRedes()
    // .subscribe( data =>{
    //   console.log(data);
    //   this.doughnutChartData={
    //     labels:Object.keys(data),
    //     datasets:[{data:Object.values(data)}]
    //   }
    //   // this.doughnutChartLabels=labels;

    // });
    this.graficasService.getUsuariosRedesDona()
    .subscribe(({labels, datasets}) => {
      console.log(labels,datasets);
      this.doughnutChartData = { labels, datasets };
    });
  }

}
