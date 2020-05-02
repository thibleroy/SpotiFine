import Token from './token.route';
import Artists from './artists.route';
import User from './user.route'
import Callback from './callback.route';
import Login from './login.route';
import Playlist from './playlist.route'
export const app_routers = [Token, Artists, User, Playlist];
export const auth_routers = [Callback, Login];
