import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend/backend.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [];

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }


}
