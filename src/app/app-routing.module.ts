import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';

const routes: Routes = [
  {path: '', component: ForumComponent  },
  {path: 'forum/:subcategoryId/:slug', component: ThreadsComponent  },
  {path: 'forum/:subcategoryId/:slug/create', component: CreateThreadComponent  },
  {path: 'threads/:threadId/:slug', component: ThreadComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
