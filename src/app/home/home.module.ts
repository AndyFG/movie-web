import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MovieService} from './movie.service';
import {ArtistService} from './artist.service';
import {GenreService} from '@app/home/genre.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    MovieService,
    ArtistService,
    GenreService
  ]
})
export class HomeModule {
}
