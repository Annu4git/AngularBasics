import { ChangeDetectionStrategy, Component, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogPosts: BlogPost[][] = [];

  currentPage: number;

  constructor(private blogDataService: BlogDataService) {

  }

  // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  updateCurrentPage(page: number) {
    this.currentPage = page;
  }

  favAll() {
    this.blogPosts[this.currentPage]
    = this.blogPosts[this.currentPage]
    .map(post => ({
      title: post.title,
      summary: post.summary,
      isFav: true
    }));

  }

  expandAll() {
    // this.blogPostTileComponent.showFullSummary();
    this.blogPostTileComponents
    .forEach(postTile => postTile.showFullSummary());
  }

  ngOnInit() {
    this.currentPage = 0;

    this.blogPosts = this.blogDataService.getBlogData();
  }
  
}
