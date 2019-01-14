import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from '../models/Thread';
import { CategoriesService } from '../shared/categories.service';
import { Subcategory } from '../models/Subcategory';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router,
    private auth: AuthService) { }

  subcategoryId: number;
  threads: Thread[];
  subcategory: Subcategory;
  isLoggedIn$: Observable<boolean>;

  getThreads() {
    this.categoriesService.getSubcategoryThreads(this.subcategoryId).subscribe(threads => this.threads = threads);
  }

  getSubcategory() {
    this.categoriesService.getSubcategory(this.subcategoryId).subscribe(subcategory => this.subcategory = subcategory);
  }

  getCreateCurrentUrl(): string {
    return this.router.url + '/create';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subcategoryId = params['subcategoryId'];
   });
   this.getThreads();
   this.getSubcategory();
   this.isLoggedIn$ = this.auth.isLoggedIn;
  }

}
