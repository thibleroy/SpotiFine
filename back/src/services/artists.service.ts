import {Artist, ArtistModel} from "../models/artists.model";

export const get_artists = async(user_id:string): Promise<Artist[]>  => {
    return ArtistModel.find({'owner.id': user_id});
}

export const post_artist = async(user_id: string, artist: Artist): Promise<Artist>  => {
    const artistModel = new ArtistModel(artist);
    return artistModel.save();
}
export const put_artist = async(artist: Artist): Promise<Artist>  => {
    return ArtistModel.updateOne({user_id: artist.user, spotify_id: artist.spotify_id}, artist);
}
export const delete_artist = async(user_id: string, artist: Artist): Promise<any>  => {
    return ArtistModel.deleteOne({user_id: artist.user,spotify_id: artist.spotify_id});
}