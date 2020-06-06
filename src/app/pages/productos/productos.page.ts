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
      sonido: ""
    },
    {
      nombre: "Frijol",
      imagen: "assets/Frijol.jpg",
      sonido: ""
    },
    {
      nombre: "Maíz",
      imagen: "assets/Maíz.jpg",
      sonido: ""
    },
  ]

  vegetales2 = [
    {
      nombre: "Melón",
      imagen: "assets/Melón.jpg",
      sonido: ""
    },
    {
      nombre: "Sandía",
      imagen: "assets/Sandía.jpg",
      sonido: ""
    },
    {
      nombre: "Naranjas",
      imagen: "assets/naranjas.jpg",
      sonido: ""
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
