import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthService } from '../auth/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from '../auth/services/token.interceptor';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';


@NgModule({
  declarations: [AdminComponent, UserComponent, UserDetailComponent, UserListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('admin', fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects])
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
