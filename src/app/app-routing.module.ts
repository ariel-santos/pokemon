import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './dashboard/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './dashboard/pokemon/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon/list',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: PokemonListComponent
      },
      {
        path: 'detail/:id',
        component: PokemonDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
