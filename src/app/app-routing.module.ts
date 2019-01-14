import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  },
  {
    path: 'forum/:subcategoryId/:slug',
    component: ThreadsComponent
  },
  {
    path: 'forum/:subcategoryId/:slug/create',
    component: CreateThreadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'threads/:threadId/:slug',
    component: ThreadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
