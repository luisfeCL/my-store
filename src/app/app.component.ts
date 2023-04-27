import { Product } from './product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Luisfe';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled: boolean = true
  
  person = {
    name: 'Luisfe',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['Luisfe', 'Nico', 'Santi'];
  newName   = ''
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',

    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  toggleButton(){

  this.btnDisabled = !this.btnDisabled
    
  }

  increaseAge(){

    this.person.age += 1

  }

  addName(){
    this.names.push(this.newName);
    this.newName = ''
  }

  deleteName(index: number){
    this.names.splice(index, 1)
  }
  
}
