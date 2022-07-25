import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
   }

public getAllMovies(): Observable<any> {
  return this.http.get("../assets/data/movies.json")

}
}
