import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error:boolean=false;
  pokemons:any=[]
  detailsImage:any=[]
  detailsId:any=[]
  detailsSlots:any=[]
  all: Pokemon[]=[]
  limit:number=0
  index=0
  searchPokemon=this.fb.group({
    name:[""]
  })
  constructor(private pokemonService:PokemonService, 
    private spinner:NgxSpinnerService, 
    private fb: FormBuilder,
    private route:Router){

  }
  ngOnInit(){
    this.getPokemons()
  }

  getPokemons(){
    this.limit=this.limit+8
    this.pokemonService.getAllPokemons(this.limit).subscribe((data:any) => {
    this.getDetailsPokemon(data.results) 
    })
  }
  getDetailsPokemon(data:any){  

    let slotsA: any[] =[]
    for (let i = this.index; i < this.limit; i++) {
     this.pokemonService.getDetailsPokemon(i+1).subscribe((result:any) => {
      for (let j = 0; j < result['types'].length; j++) {
        slotsA[j]= this.capitalize(result['types'][j]['type']['name']);
      }
      this.all[i]=<Pokemon>{
        name: this.capitalize(result['name']),
        id:result['id'],
        img:result['sprites']['other']['official-artwork']['front_default'],
        slots:slotsA
      }
    this.pokemons.push(this.all[i])
   })
  }
    this.spinner.hide()
    this.index=this.limit;
  }

  capitalize(word:string) {
    return word[0].toUpperCase() + word.slice(1);
  }

 onScroll(){
   this.spinner.show()
   this.ngOnInit();
 }
 findPokemon(){
   this.spinner.show()
   let data=this.searchPokemon.get('name')?.value
   if (data=="") {
     this.spinner.hide();
     this.limit=0
     this.pokemons=[]
     this.getPokemons()
    }else{
    data=data.toLowerCase()
    this.pokemonService.getDetailsPokemon(data).subscribe((result:any) => {
       this.spinner.hide();
       this.pokemons=[]
       let  alls: Pokemon
       alls=<Pokemon>{
          name: this.capitalize(result['name']),
           id:result['id'],
           img:result['sprites']['other']['official-artwork']['front_default']
          }
          this.pokemons.unshift(alls)
        },(error)=>{ 
          this.spinner.hide();
          this.error=true
          this.pokemons=[]
        })
      }
    }
}
