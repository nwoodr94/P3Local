import { Component, OnInit } from '@angular/core';
import { navmenuItem } from '../model/home_menu';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor() { }
  menushown = false;
  menu: string[] = navmenuItem;

  handleToggleClick(){

    console.log("pressed click");
    const navToggle = document.getElementById('toggle');
    let resizable_menu: HTMLElement = document.querySelector('.resizable-menu-container');
    let linelement: HTMLElement = document.querySelector('nav-item');
    const resizeNav: HTMLElement = document.querySelector('.resizable-menu');
    navToggle.classList.toggle('on');
    resizeNav.classList.toggle('active');

    if(!this.menushown)
    {
      resizable_menu.style.visibility = 'visible';
      this.menushown = true;
    }
    else
    {
      resizable_menu.style.visibility = 'hidden';
      this.menushown = false;
    }
   console.log(resizable_menu);
  }

  ngOnInit() {
  }

}
