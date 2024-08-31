import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent {
  @Input() post: BlogPost;

  fullText: string;

  constructor(private truncate: TruncatePipe) {
    
  }

  ngOnInit() {
    this.fullText = this.post.summary;
    this.post.summary = this.truncate.transform(this.post.summary);
  }

  showFullSummary() {
    this.post.summary = this.fullText;
  }

  toggleFavorite() {
    this.post.isFav = !this.post.isFav;
  }
}
