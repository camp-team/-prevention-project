import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-init-form',
  templateUrl: './init-form.component.html',
  styleUrls: ['./init-form.component.scss']
})
export class InitFormComponent implements OnInit {
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
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
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
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      loop: false
    });
  }
}
