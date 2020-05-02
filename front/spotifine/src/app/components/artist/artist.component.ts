import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() artist: SpotifyApi.ArtistObjectFull

  constructor() { 
  }

  ngOnInit() {
  }

}
