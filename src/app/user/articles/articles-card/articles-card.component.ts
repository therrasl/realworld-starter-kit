import { Component, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Articles } from '../model/articles';

@Component({
  selector: 'app-articles-card',
  standalone: true,
  imports: [],
  templateUrl: './articles-card.component.html',
  styleUrl: './articles-card.component.scss'
})
export class ArticlesCardComponent {
 @Input({required : true}) article !: Articles
}
