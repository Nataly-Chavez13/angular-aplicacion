import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  /* { path: "autos", component: ListaAutosComponent },
    { path: "auto/:id", component: DetalleAutosComponent }, */
  { path: 'inicio', component: HomeComponent },

  { path: 'clientes', component: ClientesComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
