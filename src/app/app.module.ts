import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadLabelComponent } from './thread-label/thread-label.component';
import { ThreadComponent } from './thread/thread.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { MarkdownPipe } from './shared/markdown.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    TopNavbarComponent,
    CategoryComponent,
    SubcategoryComponent,
    BreadcrumbsComponent,
    ThreadsComponent,
    ThreadLabelComponent,
    ThreadComponent,
    SidebarComponent,
    PostComponent,
    CreateThreadComponent,
    MarkdownPipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
