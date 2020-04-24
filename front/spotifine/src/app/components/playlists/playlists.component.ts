import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  @Input() userPlaylists: SpotifyApi.ListOfUsersPlaylistsResponse;
  loaded = false;
  constructor() {
  }

  async ngOnInit() {
  }

}
