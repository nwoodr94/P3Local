import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

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
    {img: "../assets/imgs/apartment-1.jpg"},
    {img: "../assets/imgs/apartment-2.jpg"},
    {img: "../assets/imgs/apartment-3.jpg"},
    {img: "../assets/imgs/apartment-4.jpg"},
    {img: "../assets/imgs/apartment-5.jpg"},
    {img: "../assets/imgs/apartment-6.jpg"},

  ]
  constructor(private router: Router) { 
    
  }

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

  signUpLink() {
    this.router.navigate(['/signup'])
  }

}
