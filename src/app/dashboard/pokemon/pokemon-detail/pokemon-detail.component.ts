import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/_core/_services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    this.pokemonStorage = PokemonService;
    if (this.pokemonStorage.PokemonList.length) {
      this.pokemon = this.getPokemonDetailStorage();
    } else {
      this.pokemon = this.getPokemonDetail();
    }
  }

  getPokemonDetailStorage() {
    return this.pokemonStorage.PokemonList.find( pokemon => pokemon.id === this.pokemonId);
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
