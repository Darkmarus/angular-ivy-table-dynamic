import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RickAndMortyModel } from "../model/model";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getCharacter(): Observable<RickAndMortyModel> {
    return this.http.get<RickAndMortyModel>(
      "https://rickandmortyapi.com/api/character"
    );
  }
}
