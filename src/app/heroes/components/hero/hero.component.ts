import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Jengibre';
  public age:number = 32;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name } - ${ this.age } `;
  }

  changeHero():void{
    this.name = 'Curcuma';
  }

  changeAge(): void{
    this.age = 25;
  }
  resetFom(): void{
  this.name = 'Jengibre';
  this.age = 32
}

  }
