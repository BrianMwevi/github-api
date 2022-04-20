import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TimeagoModule } from 'ngx-timeago';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FollowerCardComponent } from './components/follower-card/follower-card.component';
import { FollowingCardComponent } from './components/following-card/following-card.component';
import { FollowingPageComponent } from './components/following-page/following-page.component';
import { FollowersPageComponent } from './components/followers-page/followers-page.component';
import { RepoPageComponent } from './components/repo-page/repo-page.component';
import { CompareFollowersPageComponent } from './components/compare-followers-page/compare-followers-page.component';
import { UserThemeComponent } from './components/user-theme/user-theme.component';
import { HoverDirective } from './customDirectives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    UserCardComponent,
    RepoCardComponent,
    LandingPageComponent,
    FollowerCardComponent,
    FollowingCardComponent,
    FollowingPageComponent,
    FollowersPageComponent,
    RepoPageComponent,
    CompareFollowersPageComponent,
    UserThemeComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TimeagoModule.forRoot(),
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
