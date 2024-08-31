import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings/settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings/settings-contact/settings-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent }, 
  { 
    path: 'settings', 
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'}, 
      { path: 'profile', component: SettingsProfileComponent},
      { path: 'contact', component: SettingsContactComponent},
      { path: '**', redirectTo: 'profile' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
