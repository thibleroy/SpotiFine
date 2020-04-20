import {Component, Input, OnInit} from '@angular/core';
import {isObject} from "util";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";

@Component({
  selector: 'sf-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
})
export class ParameterComponent implements OnInit {
  @Input() param: IParam
  constructor(private spotifyConnectorService: SpotifyConnectorService) { }

  ngOnInit() {}
  getStr(obj: any): string {
    if (isObject(obj)) {
      return JSON.stringify(obj);
    }
    else return obj;
  }
  modify(){
  }
}
