import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  appRoot: any = document.querySelector("app-root")

  btnMobile(){
    let divMenu = this.appRoot.querySelector(".submenu")
    divMenu.classList.toggle("active")
    console.log("funcionando")
  }

  constructor(){

  }
}
