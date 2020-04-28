import {User} from './user.model';
import {prop, Ref, getModelForClass} from "@typegoose/typegoose";

export class Artist{
    @prop({ ref: User })
    public user?: Ref<User>;
    public name?: string;
    public spotify_id?: string;
    private rank?: number
}

export const ArtistModel =  getModelForClass(Artist);
