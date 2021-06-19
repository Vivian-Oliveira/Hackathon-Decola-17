import { Component, OnInit, Input } from '@angular/core';
import {InstituicoesMulheres} from 'src/app/services/instituicoes-mulheres';

@Component({
  selector: 'app-instituicoes-card',
  templateUrl: './instituicoes-card.component.html',
  styleUrls: ['./instituicoes-card.component.css']
})
export class InstituicoesCardComponent implements OnInit {


  @Input() instituicao: InstituicoesMulheres | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
