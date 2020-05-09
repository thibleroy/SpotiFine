import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../../../interfaces';
import {SpotifyConnectorService} from '../../../services/spotify-connector.service';

@Component({
  selector: 'sf-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() artist: SpotifyApi.ArtistObjectFull;
  hexString: string;
  constructor(private spotifyConnectorService: SpotifyConnectorService) {}

  async ngOnInit() {
    if (this.artist.images.length > 0) {
      this.hexString = await this.spotifyConnectorService.getHexFromImg(this.artist.images[0]);
    } else {
      this.hexString = '#e75050';
    }
  }
  getItem(): IItem {
    return {
      h1: {color: this.hexString, value: this.artist.name},
      thumbnail: this.artist.images[0].url
    };
  }
}
