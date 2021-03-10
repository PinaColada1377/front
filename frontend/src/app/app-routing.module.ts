import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/containers/admin/admin.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { MainComponent } from './layouts/main/main.component';
import { NotPageComponent } from './layouts/not-page/not-page.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'admin-panel', component: AdminComponent},
    {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'}
  ]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},  
  {path: '**', component: NotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
