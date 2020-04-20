import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {AccountComponent} from "../modal/account/account.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService, private spotify: SpotifyConnectorService, private modalController: ModalController) { }

  ngOnInit() {}

  get_account(){
    if (this.session.isAuth()){
      this.spotify.getAccount().subscribe(async (account) => {
        console.log('account', account);
        const modal = await this.modalController.create({component: AccountComponent, componentProps: {account: account}});
        await modal.present();
      });
    }
  }

}
