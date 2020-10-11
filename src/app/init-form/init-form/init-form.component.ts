import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-init-form',
  templateUrl: './init-form.component.html',
  styleUrls: ['./init-form.component.scss']
})
export class InitFormComponent implements OnInit, AfterViewInit {
  active: number;
  pokemonList = this.pokemonService.pokemonList;
  initPokemons: Omit<Pokemon, 'type'>[] = [
    {
      name: this.pokemonList[0].name,
      id: this.pokemonList[0].id
    },
    {
      name: this.pokemonList[3].name,
      id: this.pokemonList[3].id
    },
    {
      name: this.pokemonList[6].name,
      id: this.pokemonList[6].id
    }
  ];

  swiper;
  getingPokemonId: number;
  constructor(
    private pokemonService: PokemonService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: Router
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    Swiper.use([Navigation, Pagination]);
    this.swiper = new Swiper('.swiper-container', {
      init: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      loop: false
    });
  }

  test() {
    const index = this.swiper.activeIndex;
    if (index === 0) {
      console.log('1');
      this.getingPokemonId = 1;
    } else if (index === 1) {
      console.log('4');
      this.getingPokemonId = 4;
    } else {
      console.log('7');
      this.getingPokemonId = 7;
    }
    this.userService.updateMyPokemonCollections(this.getingPokemonId, this.userService.uid).then(() => {
      this.snackBar.open('おめでとう！' + this.pokemonList[this.getingPokemonId - 1].name + 'をゲットしたぞ 🥳', null, {
        duration: 2500
      });
      this.route.navigateByUrl('/');
    });
  }
}
