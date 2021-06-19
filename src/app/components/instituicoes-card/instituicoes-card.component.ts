<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component, OnInit, Input } from '@angular/core';
import {InstituicoesMulheres} from 'src/app/services/instituicoes-mulheres';
>>>>>>> bd82c26949d9f9a6bed7263646e9b07b1755a582

@Component({
  selector: 'app-instituicoes-card',
  templateUrl: './instituicoes-card.component.html',
  styleUrls: ['./instituicoes-card.component.css']
})
export class InstituicoesCardComponent implements OnInit {

<<<<<<< HEAD
=======

  @Input() instituicao: InstituicoesMulheres | undefined;

>>>>>>> bd82c26949d9f9a6bed7263646e9b07b1755a582
  constructor() { }

  ngOnInit(): void {
  }

}
