import { Component, OnInit } from '@angular/core';
import { LeisApiService } from 'src/app/services/leis-api.service';
import { ApiModel } from 'src/app/services/api-model';

@Component({
  selector: 'app-law-page',
  templateUrl: './law-page.component.html',
  styleUrls: ['./law-page.component.css']
})
export class LawPageComponent implements OnInit {

  lowList: ApiModel [] = []

  constructor(public leis: LeisApiService) { }

  ngOnInit(): void {
    this.leis.get().subscribe({
      next: (apiReturn) => {
        this.lowList = apiReturn;
      }
    });
​
  }
}
