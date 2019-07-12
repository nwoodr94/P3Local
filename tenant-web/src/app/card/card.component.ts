import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor() { }

  images = [
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" },
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"},
  ]

  ngOnInit() {
  }

}
