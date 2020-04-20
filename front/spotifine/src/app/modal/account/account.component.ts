import {Component, Input, OnInit} from '@angular/core';
import {IAccount} from "../../../interfaces/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @Input() account: IAccount;
  constructor() { }

  ngOnInit() {

  }
  getIterable(obj: any): {key: string, value: string}[]{
    let res = [];
    for (const property in obj) {
      res.push({key: property, value: obj[property]});
    }
    return res;
  }
}
