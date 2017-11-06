import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../models/round/category/category-model';
import { Round } from '../../models/round/round.model';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent implements OnInit {

  @Input() categories: Category[];
  @Input() rounds: Round[];

  @Output() categorySelect = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  selectCategory(category: Category){
    this.categorySelect.emit(category);
  }

}
