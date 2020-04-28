import {Route} from '@angular/router';

export interface CustomRoute extends Route{
    name?: String;
    icon?: String;
    data_cy?: String;
  }
export declare type CustomRoutes = CustomRoute[];