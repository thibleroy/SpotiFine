import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  getPlaylist() {
    const id = this.router.url;
    console.log('id', id);
  }

}
