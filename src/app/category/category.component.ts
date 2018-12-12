import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { Subcategory } from '../models/Subcategory';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  @Input()
  category: Category;
  subcategories: Subcategory[];

  getCategories() {
    this.categoriesService.getCategorySubcategories(this.category.id).subscribe(subcategories => this.subcategories = subcategories);
  }

  ngOnInit() {
    this.getCategories();
  }

}
