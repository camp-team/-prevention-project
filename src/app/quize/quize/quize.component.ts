import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  questions: boolean[] = [true, true, true];
  noGetPokemonList = [];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userService.getPokemonList(this.authService.uid)
      .pipe(take(1)).toPromise().then((pokemons) => {
        for (let i = 1; i <= 151; i++) {
          if (!pokemons[i]) {
            this.noGetPokemonList.push(i);
          }
        }
      });
  }

  updateMyPokemonCollections(pokemonId: number) {
    this.userService.updateMyPokemonCollections(pokemonId, this.authService.uid);
  }

  async submit() {
    let result = 0;
    this.questions.forEach((qestion) => {
      if (qestion) {
        result++;
      }
    });
    const randomPokemonId = Math.floor(Math.random() * this.noGetPokemonList.length + 1);
    if (result === 3) {
      console.log(result);
      new Array(2).fill(null).forEach(() => {
        const randomNumber = Math.floor(Math.random() * this.noGetPokemonList.length + 1);
        console.log(result);
        this.updateMyPokemonCollections(randomNumber);
      });
    } else if (result === 0) {
      return;
    } else {
      this.updateMyPokemonCollections(randomPokemonId);
    }
  }
}
