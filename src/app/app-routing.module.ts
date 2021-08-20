import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 { path:'pokedex',
  component:HomeComponent,
 },
 { path:'details-pokemon/:id',
   component:DetailsPokemonComponent
  }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
