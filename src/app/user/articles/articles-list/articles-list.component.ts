import {
  ChangeDetectionStrategy,
  Component,
  inject,

} from '@angular/core';
import { ArticlesService } from '../articles.service';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ArticlesCardComponent } from '../articles-card/articles-card.component';


@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AsyncPipe, NgIf , NgFor , NgClass],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent  {
  articlesService = inject(ArticlesService);
  public readonly articles$ = this.articlesService.getArticles()
}
