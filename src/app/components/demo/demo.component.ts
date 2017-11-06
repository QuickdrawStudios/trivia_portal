import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

import { Round } from '../../models/round/round.model';
import { Category } from '../../models/round/category/category-model';
import { routeLoginIfNotLoggedIn } from '../../utils/utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [ UserService ]
})
export class DemoComponent implements OnInit {

  showSubscribe: boolean = true;
  showCategorySelect: boolean = false;
  categories: Category[];
  rounds: Round[] = [];
  selectedRound: number = 0;

  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    routeLoginIfNotLoggedIn(this._userService, this._router, this._router.url);
    this.categories = [
      {
        _id: "1",
        name: "80's Pop Culture"
      },{
        _id: "2",
        name: "80's Movies"
      },{
        _id: "3",
        name: "80's Music"
      }
    ];
/*
    this.rounds = [
      {
        category: "Category 1",
        questions: [
          {
            question: "Category 1 Question 1?",
            answer: "Answer 1."
          },          {
            question: "Category 1 Question 2?",
            answer: "Answer 2."
          },          {
            question: "Category 1 Question 3?",
            answer: "Answer 3."
          },          {
            question: "Category 1 Question 4?",
            answer: "Answer 4."
          },          {
            question: "Category 1 Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 2",
        questions: [
          {
            question: "Category 2 Question 1?",
            answer: "Answer 1."
          },          {
            question: "Category 2 Question 2?",
            answer: "Answer 2."
          },          {
            question: "Category 2 Question 3?",
            answer: "Answer 3."
          },          {
            question: "Category 2 Question 4?",
            answer: "Answer 4."
          },          {
            question: "Category 2 Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 3",
        questions: [
          {
            question: "Category 3 Question 1?",
            answer: "Answer 1."
          },          {
            question: "Category 3 Question 2?",
            answer: "Answer 2."
          },          {
            question: "Category 3 Question 3?",
            answer: "Answer 3."
          },          {
            question: "Category 3 Question 4?",
            answer: "Answer 4."
          },          {
            question: "Category 3 Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 4",
        questions: [
          {
            question: "Category 4 Question 1?",
            answer: "Answer 1."
          },          {
            question: "Category 4 Question 2?",
            answer: "Answer 2."
          },          {
            question: "Category 4 Question 3?",
            answer: "Answer 3."
          },          {
            question: "Category 4 Question 4?",
            answer: "Answer 4."
          },          {
            question: "Category 4 Question 5?",
            answer: "Answer 5."
          }
        ]
      }
    ];
*/
  }

  hideSubscribe(){
    this.showSubscribe = false;
    //if(this.rounds.length < 1){
      this.showCategorySelect = true;
    //}
  }

  selectCategory(category: Category){
    let questions = [{
      question: category.name + " Question 1?",
      answer: "Answer 1."
    },{
      question: category.name + " Question 2?",
      answer: "Answer 2."
    },{
      question: category.name + " Question 3?",
      answer: "Answer 3."
    },{
      question: category.name + " Question 4?",
      answer: "Answer 4."
    },{
      question: category.name + " Question 5?",
      answer: "Answer 5."
    }];
    let round: Round = {
      category: category.name,
      questions: questions
    };
    this.rounds.push(round);
  }

  selectRound(round: number){
    this.selectedRound = round;
  }

  startGame(){
    this.showCategorySelect = false;
  }

}
