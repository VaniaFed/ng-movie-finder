import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SearchControlComponent } from './search-header/search-control/search-control.component';
import { ScaleOnHoverDirective } from './scale-on-hover.directive';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { AppButtonComponent } from './app-button/app-button.component';
import { SearchInfoComponent } from './search-info/search-info.component';
import { CardMovieInfoComponent } from './movie-list/card-movie-info/card-movie-info.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    data: {
      searchBy: 'title',
      sortBy: 'release_date',
      search: 'harry'
    }
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    pathMatch: 'full',
    data: {
      id: 1
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ScaleOnHoverDirective,
    SearchHeaderComponent,
    MovieListComponent,
    ToggleComponent,
    SearchControlComponent,
    ArrayToStringPipe,
    AppButtonComponent,
    SearchInfoComponent,
    MovieInfoComponent,
    CardMovieInfoComponent,
    SearchComponent,
    MovieComponent,
    MovieHeaderComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
