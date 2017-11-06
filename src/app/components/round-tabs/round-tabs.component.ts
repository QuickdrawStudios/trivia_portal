import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Round } from '../../models/round/round.model';

@Component({
  selector: 'app-round-tabs',
  templateUrl: './round-tabs.component.html',
  styleUrls: ['./round-tabs.component.css']
})
export class RoundTabsComponent implements OnInit {

  @Input() rounds: Round[];
  @Output() roundSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectRound(round: number){
    this.roundSelect.emit(round);
  }

}
