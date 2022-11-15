import {Component, OnInit} from '@angular/core';
import {Serie} from './serie';
import {SerieService} from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  seasonAVG: number = 0;
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {
  }

  seasonAverage(series: Serie[]): number {
    let suma: number = 0;
    for (let serie of series) {
      suma += serie.seasons;
    }
    return suma / series.length;
  }

  avg(series: Serie[]) {
    this.series = series;
    this.seasonAVG = this.seasonAverage(series);
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => this.avg(series));
  }

  ngOnInit() {
    this.getSeries();
  }

}
