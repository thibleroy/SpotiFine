import {Artists, ArtistsModel} from "../models/artists.model";
import {User} from "../models/user.model";

export const getArtists = async(spotifyId: string): Promise<Artists|null>  => {
    return ArtistsModel.findOne({'user.spotifyId': spotifyId});
}
export const postArtists = async(artists: SpotifyApi.UsersTopArtistsResponse, spotifyId: string): Promise<Artists|null>  => {
    const user: User = {spotifyId: spotifyId};
    const arts: Artists = {user: user, artists: artists};
    console.log('arts', artists.href);
    return ArtistsModel.create(arts as Artists);
}
export const putArtists = async(artists: Artists, spotifyId:string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndUpdate({'user.spotifyId': spotifyId}, artists);
}
export const deleteArtists = async( spotifyId:string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndDelete({'user.spotifyId': spotifyId});
}
