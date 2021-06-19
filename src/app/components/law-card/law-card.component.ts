import { Component, Input, OnInit } from '@angular/core';
import { ApiModel } from 'src/app/services/api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-law-card',
  templateUrl: './law-card.component.html',
  styleUrls: ['./law-card.component.css']
})
export class LawCardComponent implements OnInit {
  @Input() law: ApiModel | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
