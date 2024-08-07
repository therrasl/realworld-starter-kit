import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ArticlesService } from '../articles.service';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { ArticlesCardComponent } from '../articles-card/articles-card.component';
import { Articles } from '../model/articles';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ArticlesCardComponent, NgFor],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnInit {
  articlesService = inject(ArticlesService);
  articles$ : any

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe( (res : Articles[]) => this.articles$ = res)
    console.log(this.articles$)
  }
}
