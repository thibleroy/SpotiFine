import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() track: SpotifyApi.TrackObjectFull;
  constructor() { }

  ngOnInit() {}

}
