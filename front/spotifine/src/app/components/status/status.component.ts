import { Component, OnInit } from '@angular/core';
import {IAccount} from "../../../interfaces/account";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";

@Component({
  selector: 'sf-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  loaded: boolean
  account: IAccount;
  constructor(private spotifyConnectorService: SpotifyConnectorService) {
    this.loaded = false;
  }

  ngOnInit() {
    this.spotifyConnectorService.getAccount().subscribe((account: IAccount) => {
      this.account = account;
      this.loaded = true;
    })
  }

}
