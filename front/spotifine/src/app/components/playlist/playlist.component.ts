import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  @Input() playlist: SpotifyApi.PlaylistObjectSimplified
  constructor() { }

  ngOnInit() {
    console.log('playlist', this.playlist)
  }

}
