import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  answers = [false, false, false];

  questions: {
    label: string;
    questionText: string;
    state: string;
    yes: string;
    no: string;
    back: string;
  }[] = [
      {
        label: 'しつもん 1',
        questionText: '手あらい、うがいはしましたか？',
        state: 'one',
        yes: 'はい',
        no: 'いいえ',
        back: 'もどる'
      },
      {
        label: 'しつもん 2',
        questionText: 'マスクはつけておでかけしましたか？',
        state: 'two',
        yes: 'はい',
        no: 'いいえ',
        back: 'もどる'
      },
      {
        label: 'しつもん 3',
        questionText: '人とはなれてせいかつしましたか？',
        state: 'three',
        yes: 'はい',
        no: 'いいえ',
        back: 'もどる'
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

  answerTrue(index: number) {
    this.answers[index] = true;
  }

  answerFalse(index: number) {
    this.answers[index] = false;
  }
}
