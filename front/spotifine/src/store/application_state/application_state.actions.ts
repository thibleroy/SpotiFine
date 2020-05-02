import { createAction, props } from '@ngrx/store';

export const setLoaded = createAction('setLoaded');
export const setUnloaded = createAction('setUnloaded');

export const setLoggedIn = createAction('setLoggedIn');
export const setLoggedOut = createAction('setLoggedOut');

export const setAccount = createAction('setAccount',props<{ account: SpotifyApi.CurrentUsersProfileResponse }>());
