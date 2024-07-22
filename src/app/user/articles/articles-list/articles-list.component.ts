import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ArticlesService } from '../articles.service';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { ArticlesCardComponent } from '../articles-card/articles-card.component';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AsyncPipe , JsonPipe , ArticlesCardComponent , NgFor],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {
 articlesService = inject(ArticlesService)
 article$ = this.articlesService.getArticles()
}
