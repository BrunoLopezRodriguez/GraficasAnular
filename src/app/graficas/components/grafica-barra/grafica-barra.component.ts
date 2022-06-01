import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{


  @Input() horizontal: boolean =false;


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    // plugins: {
    //   legend: {
    //     display: true,
    //   },
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end'
    //   }
    // }

  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  @Input () barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#A01BF8', hoverBackgroundColor:'#A01BF8' },
      { data: [ 28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      { data: [ 8, 25, 60, 31, 12, 7, 98 ], label: 'Series C' },
    ]
  };

  ngOnInit(): void {
    if(this.horizontal){
      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';

      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

  // events

  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets.forEach( (m) =>{
      m.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ]
    });
    // this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   ];

    this.chart?.update();
  }






}
