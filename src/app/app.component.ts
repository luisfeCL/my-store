import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Luisfe';
  age = 30;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true
  person = {
    name: 'Luisfe',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton(){

  this.btnDisabled = !this.btnDisabled
    
  }

  increaseAge(){

    this.person.age += 1

  }
  
}
