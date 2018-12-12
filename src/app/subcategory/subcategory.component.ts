import { Component, OnInit, Input } from '@angular/core';
import { Subcategory } from '../models/Subcategory';
import { Post } from '../models/Post';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  @Input()
  subcategory: Subcategory;

  lastPost: Post;

  getLastPost() {
    this.categoriesService.getLastSubcategoryPost(this.subcategory.category.id, this.subcategory.id)
    .subscribe(post => this.lastPost = post);
  }

  ngOnInit() {
    if (this.subcategory.postsAmount > 0) {
      this.getLastPost();
    }
  }

}
