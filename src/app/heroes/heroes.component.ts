import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit { 

  heroes : Hero[] = [];
  selectedHero: any;

  constructor(private heroService: HeroService) { }
    
  
  ngOnInit() { 
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = 
    this.heroService.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}