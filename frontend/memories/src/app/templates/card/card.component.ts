import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() open: boolean;
  @Input() image: string;
  @Input() unlocked: boolean;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
    console.log(this.image);
    console.log("jiks");
  }

}
