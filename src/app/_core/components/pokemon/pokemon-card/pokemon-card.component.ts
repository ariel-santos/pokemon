import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/_core/_models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  data: Pokemon;

  @Input() set pokemon( value ) {
    this.data = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  resolvePokemonTypes(types) {
    return types.join(', ');
  }
}
