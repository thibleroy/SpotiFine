import {Component, Input, OnInit} from '@angular/core';
import {IAccount} from "../../../../interfaces/account";
import {SessionService} from "../../../../services/session.service";
import {ModalController} from "@ionic/angular";
import {ParameterComponent} from "../../parameter/parameter.component";
import {IParam} from "../../../../interfaces/common";

@Component({
  selector: 'sf-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  entryComponents: [ParameterComponent]
})
export class AccountComponent implements OnInit {
  @Input() account: IAccount;
  constructor(public session: SessionService, public modalController: ModalController) { }

  ngOnInit() {

  }
  getIterable(obj: any): IParam[]{
    let res: IParam[] = [];
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        res.push({
          name: property,
          value: obj[property],
          endpoint: '/' + property,
          editable: false
        });
      }
    }
    return res;
  }
  getstr(obj): string{
    return JSON.stringify(obj);
  }
  async logout() {
    await this.modalController.dismiss();
    await this.session.log_out();
  }
}
