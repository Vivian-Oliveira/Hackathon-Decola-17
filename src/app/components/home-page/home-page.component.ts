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
    this.infoPost.titulo = 'Primeira postagem!';
    this.infoPost.imagem = 'kkkk';
    this.infoPost.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
   }

  ngOnInit(): void {
  }

}
