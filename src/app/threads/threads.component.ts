import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread } from '../models/Thread';
import { CategoriesService } from '../shared/categories.service';
import { Subcategory } from '../models/Subcategory';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  subcategoryId: number;
  threads: Thread[];
  subcategory: Subcategory;

  getThreads() {
    this.categoriesService.getSubcategoryThreads(this.subcategoryId).subscribe(threads => this.threads = threads);
  }

  getSubcategory() {
    this.categoriesService.getSubcategory(this.subcategoryId).subscribe(subcategory => this.subcategory = subcategory);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subcategoryId = params['subcategoryId'];
   });
   this.getThreads();
   this.getSubcategory();
  }

}
