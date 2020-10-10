import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  pokemonsRight = new Array(16).fill(null).map((_, index) => {
    const maxPokemons = this.pokemonService.pokemonList.length;
    const pokemonId = Math.floor(Math.random() * maxPokemons + 1);
    return index = pokemonId;
  });

  pokemonsLeft = new Array(16).fill(null).map((_, index) => {
    const maxPokemons = this.pokemonService.pokemonList.length;
    const pokemonId = Math.floor(Math.random() * maxPokemons + 1);
    return index = pokemonId;
  });

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
  }

}
