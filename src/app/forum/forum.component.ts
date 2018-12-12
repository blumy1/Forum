import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  categories: Category[];

  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getCategories();
  }

}
