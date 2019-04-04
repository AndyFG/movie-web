import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

const routes = {
  movies: () => `/movie`
};

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<string> {
    return this.httpClient.get(routes.movies()).pipe(
      map((response: any) => response.data),
      catchError(() => of('Error, could not load movie:-('))
    );
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete(routes.movies() + '/' + id).pipe(
      catchError(() => of('Error, could not load movie:-('))
    );
  }

}
