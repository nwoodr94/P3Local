import { Component, OnInit } from '@angular/core';
import { navmenuItem } from '../model/home_menu';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor() { }

  menu: string[] = navmenuItem;

  ngOnInit() {
  }

}
