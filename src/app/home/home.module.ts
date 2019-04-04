import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MovieService} from './movie.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    MovieService
  ]
})
export class HomeModule {
}
