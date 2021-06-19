import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public logoUrl = 'http://blog.donadivasemijoias.com.br/wp-content/uploads/2017/03/mulheres-felizes-realizadas-pessoal-e-financeiramente.jpg'
  public titulo = 'Mulheres Felizes Brilham Mais!!!!'
  public descricao = 'O autocuidado é essencial para a nossa saúde mental e bem-estar, e ouvir o que o nosso corpo precisa faz com que nos tornemos fortes e mais felizes. Quando aceitamos nossos pontos fortes e fracos, quando nos aceitamos como somos, ganhamos mais auto confiança.'


  constructor() {

  }

  ngOnInit(): void {
  }

}
