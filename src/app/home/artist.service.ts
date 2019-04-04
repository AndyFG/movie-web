import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

const routes = {
  artists: () => `/artist`
};

@Injectable()
export class ArtistService {

  public postRef: (data: any) => void;

  constructor(private httpClient: HttpClient) {
    this.postRef = (data) => this.post(data);
  }

  get(): Observable<string> {
    return this.httpClient.get(routes.artists()).pipe(
      map((response: any) => response.data),
      catchError(() => of('Error, could not load artist:-('))
    );
  }

  post(data: any): Observable<any> {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/vnd.api+json'})};
    return this.httpClient.post(routes.artists(), data, options);
  }
}
