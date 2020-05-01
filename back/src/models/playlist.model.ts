import {User} from './user.model';
import {prop, getModelForClass} from "@typegoose/typegoose";

export class Playlist {
    @prop({_id: false })
    public user?: User

    @prop()
    public playlist?: SpotifyApi.PlaylistObjectFull;
}

export const PlaylistModel =  getModelForClass(Playlist);
