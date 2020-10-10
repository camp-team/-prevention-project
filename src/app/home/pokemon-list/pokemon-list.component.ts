import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserLoginList } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  pokemonList = [];
  constructor(
    public pokemonService: PokemonService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.getPokemonCollection();
  }

  getPokemonCollection() {
    const subscription = this.userService
      .getPokemonList(this.authService.uid)
      .subscribe((pokemons) => {
        this.pokemonList = [];
        for (let i = 1; i <= 151; i++) {
          this.pokemonList.push(pokemons[i] ? true : false);
        }
      });
    this.subscription.add(subscription);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
