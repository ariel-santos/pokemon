import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/_core/_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonStorage: any;
  pokemonList = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonStorage = PokemonService.PokemonList;
    if (this.pokemonStorage.cards.length) {
      this.pokemonList = this.pokemonStorage.cards;
    } else {
      this.getPokemons();
    }
  }

  getPokemons() {
    this.pokemonService.getAllPokemon().subscribe(
      res => {
        if (res.length) {
          const pokemonCards = res.filter( r => r.nationalPokedexNumber );
          this.pokemonStorage.cards = pokemonCards;
          this.pokemonList = pokemonCards;
        }
      }, err => {
        console.error(err);
      }
    );
  }



}
