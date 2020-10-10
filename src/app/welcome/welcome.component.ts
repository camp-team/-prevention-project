import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  pokemons = new Array(10).fill(null).map((_, index) => {
    const maxPokemons = this.pokemonService.pokemonList.length;
    const pokemonId = Math.floor(Math.random() * maxPokemons);
    return index = pokemonId;
  });

  // pokemonId = Math.floor(Math.random() * this.maxPokemons);


  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    console.log(this.pokemons);
  }

}
