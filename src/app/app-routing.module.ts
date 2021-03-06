import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HomeComponent } from './home/home.component';
import { PoleComponent } from './pole/pole.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rec',component:ReclamationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'pole',component:PoleComponent},
  {path:'mail',component:EmailComponent},
  {path:'evaluation',component:EvaluationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
