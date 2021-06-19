import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  titulo: string = '';
  imagem: string = '';
  texto: string = '';

  public infoPost: HomePageComponent;

  constructor() {
    this.infoPost = new HomePageComponent();
    this.infoPost.titulo = 'Não se cale!';
    this.infoPost.imagem = '';
    this.infoPost.texto = 'Iniciativa de apoio e informação a mulheres vítimas de violência';
   }
  ngOnInit(): void {
  }

}
