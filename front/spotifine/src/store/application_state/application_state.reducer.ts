import { createReducer, on } from '@ngrx/store';
import * as ApplicationStateActions from './application_state.actions';

export interface ApplicationState {
    account : SpotifyApi.CurrentUsersProfileResponse,
    isLoaded: boolean;
    isLoggedIn: boolean;
  }

  export const initialState: ApplicationState = {
    account : null,
    isLoaded: false,
    isLoggedIn: false,
  };
 
const _applicationStateReducer = createReducer(initialState,
  on(ApplicationStateActions.setLoaded, state => ({ ...state, isLoaded: true })),
  on(ApplicationStateActions.setUnloaded, state => ({ ...state, isLoaded: false })),
  on(ApplicationStateActions.setLoggedIn, state => ({ ...state, isLoggedIn: true })),
  on(ApplicationStateActions.setLoggedOut, state => ({ isLoggedIn: false, isLoaded : false, account : null  })),
  on(ApplicationStateActions.setAccount, (state,action) => ({ ...state, account: action.account, isLoaded : true, isLoggedIn : true }))

);
 
export function applicationStateReducer(state, action) {
  return _applicationStateReducer(state, action);
}