import {Component, Input, OnInit} from '@angular/core';
import {SpotifyConnectorService} from '../../../services/spotify-connector.service';
import {IItem} from '../../../interfaces';

@Component({
    selector: 'sf-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    @Input() playlist: SpotifyApi.PlaylistObjectSimplified;
    hexString: string;
    constructor(private spotifyConnectorService: SpotifyConnectorService) {}
    async ngOnInit() {
        if (this.playlist.images.length > 0) {
            this.hexString = await this.spotifyConnectorService.getHexFromImg(this.playlist.images[0]);
        } else {
            this.hexString = '#e75050';
        }
    }
    getItem(): IItem {
        return {
            href: '/playlist/' + this.playlist.id,
            thumbnail: (this.playlist.images.length > 0 ? this.playlist.images[0].url : './../../assets/icon/playlist.svg'),
            h1: {color: this.hexString, value: this.playlist.name}
        };
    }
}
