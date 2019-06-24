import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [{path:'', component:HomeComponent},
                        {path:'results', component:ResultsComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'subscribe', component:SubscribeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
