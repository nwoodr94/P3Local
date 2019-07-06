import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000
};

  slides = [
    {img:   "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" },
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"},

  ]
  constructor() { }

  ngOnInit() {
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
