import {connect_db} from '../utils/mongo.util';
import ArtistsModel, {IArtist} from "../models/artists.model";

export const get_artists = async(): Promise<IArtist[]>  => {
    await connect_db();
    return ArtistsModel.find({"owner.id": "1"});
}
