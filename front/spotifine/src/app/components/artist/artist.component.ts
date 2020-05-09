import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../../../interfaces';

@Component({
  selector: 'sf-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() artist: SpotifyApi.ArtistObjectFull;

  constructor() {}

  ngOnInit() {
  }
  getItem(): IItem {
    return {
      h1: {color: '#e75050', value: this.artist.name},
      thumbnail: this.artist.images[0].url
    };
  }
}
