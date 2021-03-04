import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { MainComponent } from './layouts/main/main.component';
import { NotPageComponent } from './layouts/not-page/not-page.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},  
  {path: '**', component: NotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
