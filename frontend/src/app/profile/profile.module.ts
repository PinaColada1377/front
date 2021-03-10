import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './containers/profile/profile.component';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';



@NgModule({
  declarations: [ProfileComponent, MainProfileComponent, ProfileUserComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
