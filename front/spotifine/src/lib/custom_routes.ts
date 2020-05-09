import {Route} from '@angular/router';

export interface CustomRoute extends Route {
    name?: string;
    icon?: string;
    data_cy?: string;
  }
export declare type CustomRoutes = CustomRoute[];
