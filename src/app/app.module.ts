import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import {ForumsModule} from './forums/forums.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {ChatListComponent} from './chat-list/chat-list.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {UserService} from './services/user.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth-guard.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuard]},
  {path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuard]},
  {path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule'},
  {path: '', redirectTo: '/forums', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ForumsModule,
    ClarityModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
