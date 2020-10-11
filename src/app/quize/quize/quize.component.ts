import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss'],
})
export class QuizeComponent implements OnInit {
  getActionBtn: boolean;
  answers: boolean[] = [true, true, true];
  noGetPokemonList = [];
  questions: {
    label: string;
    questionText: string;
    state: string;
    yes: string;
    no: string;
    back: string;
  }[] = [
    {
      label: 'しつもん 1',
      questionText: '手あらい、うがいはしましたか？',
      state: 'one',
      yes: 'はい',
      no: 'いいえ',
      back: 'もどる',
    },
    {
      label: 'しつもん 2',
      questionText: 'マスクはつけておでかけしましたか？',
      state: 'two',
      yes: 'はい',
      no: 'いいえ',
      back: 'もどる',
    },
    {
      label: 'しつもん 3',
      questionText: '人とはなれてせいかつしましたか？',
      state: 'three',
      yes: 'はい',
      no: 'いいえ',
      back: 'もどる',
    },
  ];
  pokemonIds = new Array(6).fill(null).map((_, index) => {
    const pokemonId = Math.floor(Math.random() * 151 + 1);
    return (index = pokemonId);
  });

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userService
      .getPokemonList(this.authService.uid)
      .pipe(take(1))
      .toPromise()
      .then((pokemons) => {
        for (let i = 1; i <= 151; i++) {
          if (!pokemons[i]) {
            this.noGetPokemonList.push(i);
          }
        }
      });
  }

  answerTrue(index: number) {
    this.answers[index] = true;
    if (index === 2) {
      this.getActionBtn = true;
    }
  }

  answerFalse(index: number) {
    this.answers[index] = false;
    if (index === 2) {
      this.getActionBtn = true;
    }
  }

  updateMyPokemonCollections(pokemonId: number) {
    this.userService.updateMyPokemonCollections(
      pokemonId,
      this.authService.uid
    );
  }

  private reportDateAndPokemon(pokemonId1?: number, pokemoId2?: number) {
    this.userService.reportDateAndPokemon(
      this.authService.uid,
      pokemonId1,
      pokemoId2
    );
  }

  async submit() {
    let result = 0;
    this.questions.forEach((qestion) => {
      if (qestion) {
        result++;
      }
    });
    const randomPokemonId = Math.floor(
      Math.random() * this.noGetPokemonList.length + 1
    );
    if (result === 3) {
      new Array(2).fill(null).forEach(() => {
        const randomNumber = Math.floor(
          Math.random() * this.noGetPokemonList.length + 1
        );
        this.updateMyPokemonCollections(this.noGetPokemonList[randomNumber]);
      });
    } else if (result === 0) {
      return;
    } else {
      this.updateMyPokemonCollections(this.noGetPokemonList[randomPokemonId]);
    }
    this.snackBar.open('ゲットだぜ！', null, {
      duration: 2500,
    });
  }
}
