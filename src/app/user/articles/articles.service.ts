import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './model/articles';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private readonly http = inject(HttpClient);

  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(
      'https://api.realworld.io/api/articles?limit=10&offset=0'
    );
  }
}
