import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public logoUrl = 'https://uploads.metropoles.com/wp-content/uploads/2020/11/06184425/WhatsApp-Image-2020-11-06-at-18.41.20-600x400.jpeg'
  public titulo = 'Violência contra mulher!!!!'
  public descricao = 'A violência contra a mulher ainda é um problema fortemente enraizado no mundo. Ela não é exclusividade de alguns países e de algumas culturas. Ela é resultado de uma cultura patriarcal que está vinculada aos fundamentos de nossa sociedade. A violência contra a mulher expressa-se de várias maneiras, desde o estupro até a violência psicológica, e precisa ser combatida com veemência e urgência. As consequências desse tipo de violência são terríveis para as vítimas, podendo levá-las à morte.'


  constructor() {

  }

  ngOnInit(): void {
  }

}
