import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ArticlesService {
    private readonly http = inject(HttpClient);

    getArticles(): Observable<any> {
        return this.http.get('https://api.realworld.io/api/articles?limit=10&offset=0')
    }
}