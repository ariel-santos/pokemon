import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/_core/_services/pokemon.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonStorage: any;
  pokemon: any;
  pokemonId: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.pokemonStorage = PokemonService.PokemonList;

    this.route.params.subscribe((param) => {
      this.pokemonId = param.id;

      if (this.pokemonStorage.cards.length) {
        this.pokemon = this.getPokemonDetailStorage();
      } else {
        this.pokemon = this.getPokemonDetail();
      }
      this.addPokemonToHistory();
    });
  }

  addPokemonToHistory() {
    if (this.pokemon) {
      const findPokemon = this.pokemonStorage.history.find( pokemon => pokemon.id === this.pokemon.id);
      if (!findPokemon) {
        this.pokemonStorage.history.unshift(this.pokemon);
      }
    }
  }

  getPokemonDetailStorage() {
    return this.pokemonStorage.cards.find( pokemon => pokemon.id === this.pokemonId);
  }

  getPokemonDetail() {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(
      res => {
        this.pokemon = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
