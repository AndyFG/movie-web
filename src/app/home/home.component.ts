import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';

import {MovieService} from './movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[];
  isLoading: boolean;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.isLoading = true;

    this.movieService.get().pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe((movies: any) => {
      this.movies = movies;
      console.log(movies);
    });
  }

}
