import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

const routes = {
  genres: () => `/genre`
};

@Injectable()
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<string> {
    return this.httpClient.get(routes.genres()).pipe(
      map((response: any) => response.data),
      catchError(() => of('Error, could not load genre:-('))
    );
  }

}
