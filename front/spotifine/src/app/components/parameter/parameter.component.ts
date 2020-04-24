import {Component, Input, OnInit} from '@angular/core';
import {IParam} from '../../../interfaces';
@Component({
  selector: 'sf-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
})
export class ParameterComponent implements OnInit {
  @Input() param: IParam
  constructor() { }

  ngOnInit() {}
  getStr(obj: any): string {
    if (typeof(obj) === 'object') {
      return JSON.stringify(obj);
    }
    else return obj;
  }
  modify(){
  }
}
