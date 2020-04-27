import mongoose, { Schema, Document } from 'mongoose';
import {IUser} from './user.model';

export interface IArtist extends Document {
    owner: IUser['id'];
    name: string;
    spotify_id: string;
}

const ArtistsSchema: Schema = new Schema({
    owner: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    spotify_id: { type: String, required: true }
});

export default mongoose.model<IArtist>('Artists', ArtistsSchema);
