import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http :HttpClient) { }

  getAllPokemons (cant:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${cant}`)
  }
  getDetailsPokemon(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
