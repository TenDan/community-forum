import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogsComponent} from './blogs/blogs.component';
import {BlogComponent} from './blog/blog.component';

import {BlogsService} from './services/blogs.service';
import {BlogRoutingModule} from './blogs-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ],
})
export class BlogsModule { }
