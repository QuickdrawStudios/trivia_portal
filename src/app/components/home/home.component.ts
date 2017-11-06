import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

import { Round } from '../../models/round/round.model';

import { routeLoginIfNotLoggedIn } from '../../utils/utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {

  rounds: Round[];

  constructor( 
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    routeLoginIfNotLoggedIn(this._userService, this._router, this._router.url);
    this.rounds = [
      {
        category: "Category 1",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer 1."
          },          {
            question: "Question 2?",
            answer: "Answer 2."
          },          {
            question: "Question 3?",
            answer: "Answer 3."
          },          {
            question: "Question 4?",
            answer: "Answer 4."
          },          {
            question: "Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 2",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer 1."
          },          {
            question: "Question 2?",
            answer: "Answer 2."
          },          {
            question: "Question 3?",
            answer: "Answer 3."
          },          {
            question: "Question 4?",
            answer: "Answer 4."
          },          {
            question: "Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 3",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer 1."
          },          {
            question: "Question 2?",
            answer: "Answer 2."
          },          {
            question: "Question 3?",
            answer: "Answer 3."
          },          {
            question: "Question 4?",
            answer: "Answer 4."
          },          {
            question: "Question 5?",
            answer: "Answer 5."
          }
        ]
      },{
        category: "Category 4",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer 1."
          },          {
            question: "Question 2?",
            answer: "Answer 2."
          },          {
            question: "Question 3?",
            answer: "Answer 3."
          },          {
            question: "Question 4?",
            answer: "Answer 4."
          },          {
            question: "Question 5?",
            answer: "Answer 5."
          }
        ]
      }
    ]
  }

}
