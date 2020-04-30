import {Artists, ArtistsModel} from "../models/artists.model";
import {User} from "../models/user.model";

export const get_artists = async(spotifyId: string): Promise<Artists|null>  => {
    return ArtistsModel.findOne({'user.spotifyId': spotifyId});
}
export const post_artists = async(artists: SpotifyApi.UsersTopArtistsResponse, spotifyId: string): Promise<Artists|null>  => {
    const user: User = {spotifyId: spotifyId};
    const arts: Artists = {user: user, artists: artists};
    console.log('arts', artists.href);
    return ArtistsModel.create(arts as Artists);
}
export const put_artists = async(artists: Artists, spotifyId:string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndUpdate({'user.spotifyId': spotifyId}, artists);
}
export const delete_artists = async( spotifyId:string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndDelete({'user.spotifyId': spotifyId});
}
