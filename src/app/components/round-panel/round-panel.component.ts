import { Component, OnInit, Input } from '@angular/core';

import { Round } from '../../models/round/round.model'; 

@Component({
  selector: 'app-round-panel',
  templateUrl: './round-panel.component.html',
  styleUrls: ['./round-panel.component.css']
})
export class RoundPanelComponent implements OnInit {

  @Input() round: Round;

  constructor() { }

  ngOnInit() {

  }

}
