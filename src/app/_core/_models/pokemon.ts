export class PokemonStorage {
  cards: Array<Pokemon>;
  lastUpdate: Date;

  constructor() {
    this.cards = [];
    this.lastUpdate = new Date();
  }
}

export class Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  subtype: string;
  supertype: string;
  hp: string;
  series: string;
  types: Array<string>;

  // constructor() {
  //   this.id = '';
  //   this.name = '';
  //   this.imageUrl = '';
  //   this.subtype = '';
  //   this.supertype = '';
  // }
}
