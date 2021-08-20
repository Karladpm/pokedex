import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, 
    private pokemonService:PokemonService) { }
    pokemons:Pokemon[]=[]
    picture!: string;
    idPokemon!: string;
    namePokemon!: string;
    heightPokemon!:string;
    categoryPokemon!:string;
    weightPokemon!:string;
    abilitiesPokemon!:string;
    type!:string
    slots:any[]=[]
    weaknesses!:string;
    
    ngAfterContentInit(){
     this._activatedRoute.params.subscribe(
      params=>{
       this.getDetails(params['id'])
      }
    )
  }
  ngOnInit()  {

  }
getDetails(id:number){
  this.pokemonService.getDetailsPokemon(id).subscribe((result:any) => {
  this.namePokemon=this.capitalize(result['name']),
  this.idPokemon= "#"+result['id'],
  this.picture= result['sprites']['other']['official-artwork']['front_default']
  this.heightPokemon=result['height']+" cm"
  this.weightPokemon=result['weight']+" kg"
  this.abilitiesPokemon=this.capitalize(result['abilities'][0]['ability']['name'])
  for (let j = 0; j < result['types'].length; j++) {
    this.slots[j]= this.capitalize(result['types'][j]['type']['name']);
    }
  })
}
capitalize(word:string) {
  return word[0].toUpperCase() + word.slice(1);
}
}
