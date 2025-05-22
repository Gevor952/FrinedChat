import {Routes} from '@angular/router';
import {HomeComponent} from './component/page/home/home.component';
import {PageNotFoundComponent} from './component/page/page.not.found/page.not.found.component';
import {RegisterComponent} from './component/page/register/register.component';
import {LoginComponent} from './component/page/login/login.component';
import {authGuard} from './guards/auth.guard';
import {loginGuard} from './guards/login.guard';
import {MessagePageComponent} from './component/page/message.page/message.page.component';
import {AddFriendComponent} from './component/page/add.friend/add.friend.component';
import {AcceptFriendComponent} from './component/page/accept.friend/accept.friend.component';
import {UpdateUserComponent} from './component/page/update.user/update.user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [loginGuard],
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },

  {
    path: 'message',
    component: MessagePageComponent,
    canActivate: [authGuard],
  },

  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },

  {
    path: 'add-friend',
    component: AddFriendComponent,
    canActivate: [authGuard],
  },

  {
    path: 'accept-friend',
    component: AcceptFriendComponent,
    canActivate: [authGuard],
  },

  {
    path:'update-user',
    component: UpdateUserComponent,
    canActivate: [authGuard],
  },

  {
    path: '**',
    redirectTo: 'not-found',
  }
];
