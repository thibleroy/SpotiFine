import { createAction } from '@ngrx/store';

export const setLoaded = createAction('setLoaded');
export const setUnloaded = createAction('setUnloaded');

export const setLoggedIn = createAction('setLoggedIn');
export const setLoggedOut = createAction('setLoggedOut');
