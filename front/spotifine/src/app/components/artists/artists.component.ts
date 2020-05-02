import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  @Input() artists: SpotifyApi.ArtistObjectFull[]
  constructor() {}

  ngOnInit() {}

}
