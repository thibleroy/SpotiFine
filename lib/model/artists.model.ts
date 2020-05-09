import {User} from './user.model';
import {prop, getModelForClass} from "@typegoose/typegoose";

export class Artists {
    @prop({_id: false })
    public user?: User;

    @prop()
    public artists?: SpotifyApi.UsersTopArtistsResponse;
}

export const ArtistsModel =  getModelForClass(Artists);
