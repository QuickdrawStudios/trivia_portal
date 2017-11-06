import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../models/round/question/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() questionNumber: number;

  questionShow: boolean = false;
  answerShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showQuestion(){
    this.questionShow = true;
  }

  showAnswer(){
    this.answerShow = true;
  }

}
