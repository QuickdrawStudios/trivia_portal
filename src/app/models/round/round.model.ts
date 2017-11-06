import { Question } from './question/question.model';

export interface Round {
  category: string;
  questions: Question[];
}
