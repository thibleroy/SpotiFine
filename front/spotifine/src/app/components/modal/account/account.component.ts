import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ParameterComponent} from "../../parameter/parameter.component";
import {IParam} from "../../../../interfaces";
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'sf-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  entryComponents: [ParameterComponent]
})
export class AccountComponent implements OnInit {
  @Input() account: SpotifyApi.CurrentUsersProfileResponse;
  constructor(public modalController: ModalController, private session: SessionService) { }
  ngOnInit() {}
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
  async logout(){
    await this.session.log_out();
    await this.close();
  }
  async close(){
    await this.modalController.dismiss();
  }
}
