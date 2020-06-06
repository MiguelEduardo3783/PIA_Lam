import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor() { }

  vegetales1 = [
    {
      nombre: "Papa",
      imagen: "assets/Papa.jpg",
      sonido: "assets/Papa.mp3"
    },
    {
      nombre: "Frijol",
      imagen: "assets/Frijol.jpg",
      sonido: "assets/Frijol.mp3"
    },
    {
      nombre: "Maíz",
      imagen: "assets/Maíz.jpg",
      sonido: "assets/Maíz.mp3"
    },
  ]

  vegetales2 = [
    {
      nombre: "Melón",
      imagen: "assets/Melón.jpg",
      sonido: "assets/Melón.mp3"
    },
    {
      nombre: "Sandía",
      imagen: "assets/Sandía.jpg",
      sonido: "assets/Sandía.mp3"
    },
    {
      nombre: "Naranjas",
      imagen: "assets/naranjas.jpg",
      sonido: "assets/Naranja.mp3"
    },
  ]

  audio(vegetal){
    let sonido = new Audio();
    sonido.src = vegetal.sonido;
    sonido.load();
    sonido.play();
  }

  ngOnInit() {
  }

}
