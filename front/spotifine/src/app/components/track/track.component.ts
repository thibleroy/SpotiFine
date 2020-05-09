import {Component, Input, OnInit} from '@angular/core';
import {SpotifyConnectorService} from '../../../services/spotify-connector.service';
import {IItem} from '../../../interfaces';

@Component({
    selector: 'sf-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
    @Input() track: SpotifyApi.TrackObjectFull;
    item: IItem;
    hexString: string;

    constructor(private spotifyConnectorService: SpotifyConnectorService) {
    }

    async ngOnInit() {
        if (this.track.album.images.length > 0) {
            this.hexString = await this.spotifyConnectorService.getHexFromImg(this.track.album.images[0]);
        } else {
            this.hexString = '#e75050';
        }
    }
    getItem(): IItem {
      return {
        color: this.hexString,
        h1: {value: this.track.name, color: this.hexString},
        h2: {value: this.track.album.name, color: this.hexString},
        p: {value: this.track.artists.map((t) => t.name).toString(), color: this.hexString},
        btn_icon: 'play',
        thumbnail: (this.track.album.images.length > 0 ? this.track.album.images[0].url : './../../assets/icon/playlist.svg')
      };
    }
}
