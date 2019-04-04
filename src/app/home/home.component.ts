import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {MovieService} from './movie.service';
import {Observable} from 'rxjs';
import {ArtistService} from '@app/home/artist.service';
import {GenreService} from '@app/home/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[];
  isLoading: boolean;
  people: Observable<any[]>;

  public addArtistRef: (name: string) => void;

  constructor(private movieService: MovieService,
              private artistService: ArtistService,
              private genreService: GenreService,
              private modalService: NgbModal) {

    this.addArtistRef = (name) => this.addArtist(name);
  }

  ngOnInit() {
    this.isLoading = true;

    this.movieService.get().pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe((movies: any) => {
      this.movies = movies;
    });

    this.artistService.get().subscribe((artists: any) => {
      this.people = artists;
    });
  }

  add(content: any) {
    const modal = this.modalService.open(content);

    modal.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      });
  }

  addArtist(name: string) {
    const data = {data: {type: 'artist', attributes: {name: name}}};
    return new this.artistService.postRef(data).toPromise();
  }
}
