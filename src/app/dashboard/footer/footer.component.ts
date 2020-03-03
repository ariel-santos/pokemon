import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/_core/_services/pokemon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pokemonStorage: any;
  pokemonList = [];

  constructor() { }

  ngOnInit(): void {
    this.pokemonStorage = PokemonService.PokemonList;
    this.pokemonList = this.pokemonStorage.history;
  }
}
