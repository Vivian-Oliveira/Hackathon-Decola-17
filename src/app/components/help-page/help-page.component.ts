import { Component, OnInit } from '@angular/core';
import { InstituicoesApiService } from 'src/app/services/instituicoes-api.service';
import { InstituicoesMulheres } from 'src/app/services/instituicoes-mulheres';


@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {

  listaDeInstituicoes: InstituicoesMulheres[] = [];

  constructor(public instituicoes: InstituicoesApiService) { }

  ngOnInit(): void {
    this.instituicoes.get().subscribe({
      next: (retornarApi) => {
        this.listaDeInstituicoes = retornarApi;
      }

    })
  }

}
