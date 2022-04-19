import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareFollowersPageComponent } from './components/compare-followers-page/compare-followers-page.component';
import { FollowersPageComponent } from './components/followers-page/followers-page.component';
import { FollowingPageComponent } from './components/following-page/following-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RepoPageComponent } from './components/repo-page/repo-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: ':username/repos', component: RepoPageComponent },
  { path: ':username/followers', component: FollowersPageComponent },
  { path: ':username/following', component: FollowingPageComponent },
  { path: ':username/compare', component: CompareFollowersPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
