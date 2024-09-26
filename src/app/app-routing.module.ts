import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitComponent } from './add/produit/produit.component';

const routes: Routes = [
  {path :"produits", component :ProduitsComponent},
  {path :"add-produit", component :ProduitComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
