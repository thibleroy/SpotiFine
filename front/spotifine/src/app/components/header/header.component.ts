import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {AccountComponent} from "../modal/account/account.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public session: SessionService, public spotify: SpotifyConnectorService, private modalController: ModalController) { }

  ngOnInit() {

  }

  get_account(){
    if (this.session.isAuth()){
      this.spotify.getAccount().subscribe(async (account) => {
        console.log('accounts', account);
        const modal = await this.modalController.create({component: AccountComponent, componentProps: {account: account}});
        await modal.present();
      });
    }
  }

}
