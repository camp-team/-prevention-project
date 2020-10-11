import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
  myPokemon: number;

  constructor(
    private pokemonService: PokemonService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.myPokemon = user?.myPokemon;
    });
  }

  login() {
    this.authService.login().then(() => {
      console.log(this.myPokemon);
      if (this.myPokemon) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/init-form');
      }
    });
  }
}
