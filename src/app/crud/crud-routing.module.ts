import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from '../_helpers/auth.guard';


const routes: Routes = [
 
  { path: 'crud/home', component: HomeComponent ,canActivate: [AuthGuard] },
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud/details/:productId', component: DetailsComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
  
  
})
export class CrudRoutingModule { }
