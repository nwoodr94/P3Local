import { Component, OnInit } from '@angular/core';
import { navmenuItem } from '../model/home_menu';

@Component({
  selector: 'app-resizeable-menu',
  templateUrl: './resizeable-menu.component.html',
  styleUrls: ['./resizeable-menu.component.css']
})
export class ResizeableMenuComponent implements OnInit {

  menu: string[] = navmenuItem;

  constructor() {
  }

  ngOnInit() {
  }

}
