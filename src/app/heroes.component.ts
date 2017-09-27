import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  title = 'tour of Heroes';
  //hero = 'windstorm';
  selectedHero: Hero;
  //heroes = HEROES;
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) { };

  ngOnInit(): void {
    this.getHeroes();
  }

  //functions
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };  
  // this.heroes = this.heroService.getHeroes();
  
}

