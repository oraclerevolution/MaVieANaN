import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine a laver',
      status:'allumé'
    },
    {
      name: 'Televison',
      status:'allumé'
    },
    {
      name: 'radio',
      status:'éteint'
    }
  ];
  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer(){
    console.log('On allume tout !');
  }
}