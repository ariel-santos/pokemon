import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PokemonStorage } from '../_models/pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public static PokemonList: PokemonStorage = new PokemonStorage();

  constructor(
    private apiService: ApiService
  ) { }

  getAllPokemon() {
    return this.apiService.get(`/cards`, )
      .pipe( map( (res: any) => {
          return res.cards.sort( (a, b) => (a.name > b.name) ? 1 : -1 );
      }));
  }

  getPokemonById(pokemonId: string) {
    return this.apiService.get(`/cards/${pokemonId}`);
  }
}
