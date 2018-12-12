import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';

const routes: Routes = [
  {path: '', component: ForumComponent  },
  {path: 'forum/:subcategoryId/:slug', component: ThreadsComponent  },
  {path: 'threads/:threadId/:slug', component: ThreadComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
