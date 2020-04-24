import {Component, Input, OnInit} from '@angular/core';
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {AccountComponent} from "../modal/account/account.component";
import {SessionService} from "../../../services/session.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'sf-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() account: SpotifyApi.CurrentUsersProfileResponse;
  constructor(private spotify: SpotifyConnectorService, private session: SessionService, private modalController: ModalController) {}

  async ngOnInit() {
  }

  getWindowWidth(): number{
    return window.innerWidth;
  }

  async get_account(){
    if (this.session.isAuth()){
        const modal = await this.modalController.create({component: AccountComponent, componentProps: {account: this.account}});
        await modal.present();
    }
  }
}
