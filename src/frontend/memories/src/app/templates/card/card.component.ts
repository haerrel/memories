import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {BackendService} from '../../services/backend/backend.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: any;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    console.log(this.data);
  }

  showUnlockModal() {
    if (this.isUnlockable()) {
      document.getElementById('modal-button-' + this.data.id).click();
    }
  }

  isUnlockable() {
    if (this.data.date) {
      return moment(this.data.date).diff(moment()) < 0;
    }
    return false;
  }

  isOpen() {
    return this.data.open;
  }

  getText() {
    if (this.isUnlockable()) {
      return 'click to unlock';
    } else {
      return this.formattedTime();
    }
  }

  formattedTime() {
    return moment(this.data.date).format('DD.MM.YYYY');
  }

  unlock(secret: string) {
    console.log(secret);
    if (this.isUnlockable()) {
      this.backend.unlockCard(this.data.id, secret).subscribe(data => {
        this.data = data;
      }) ;
    }
  }
}
