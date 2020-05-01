import { createReducer, on } from '@ngrx/store';
import * as ApplicationStateActions from './application_state.actions';
 

export interface State {
    isLoaded: boolean;
    isLoggedIn: boolean;
  }

  export const initialState: State = {
    isLoaded: false,
    isLoggedIn: false,
  };
 
const _applicationStateReducer = createReducer(initialState,
  on(ApplicationStateActions.setLoaded, state => ({ ...state, isLoaded: true })),
  on(ApplicationStateActions.setUnloaded, state => ({ ...state, isLoaded: false })),
  on(ApplicationStateActions.setLoggedIn, state => ({ ...state, isLoggedIn: true })),
  on(ApplicationStateActions.setLoggedOut, state => ({ ...state, isLoggedIn: false }))
);
 
export function applicationStateReducer(state, action) {
  return _applicationStateReducer(state, action);
}