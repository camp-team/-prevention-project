import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  maxPokemons = this.pokemonService.pokemonList.length;
  randomPokemonId: number = Math.floor(Math.random() * this.maxPokemons + 1);
  randomBallId: number = Math.floor(Math.random() * 4 + 1);

  pokemonsRight = new Array(16).fill(null).map((_, index) => {
    const pokemonId = Math.floor(Math.random() * this.maxPokemons + 1);
    return index = pokemonId;
  });

  pokemonsLeft = new Array(16).fill(null).map((_, index) => {
    const pokemonId = Math.floor(Math.random() * this.maxPokemons + 1);
    return index = pokemonId;
  });

  constructor(
    private pokemonService: PokemonService,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  login() {
    this.authService.login();
  }
}
