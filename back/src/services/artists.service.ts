import {Artists, ArtistsModel} from "../models/artists.model";
import {User} from "../models/user.model";

export const getArtists = async(id: string): Promise<Artists|null>  => {
    return ArtistsModel.findOne({_id: id});
}
export const getArtistsBySpotifyId = async(spotifyId: string): Promise<Artists|null>  => {
    return ArtistsModel.findOne({'user.spotifyId': spotifyId});
}
export const postArtists = async(artists: SpotifyApi.UsersTopArtistsResponse, spotifyId: string): Promise<Artists|null>  => {
    const user: User = {spotifyId: spotifyId};
    const arts: Artists = {user: user, artists: artists};
    return ArtistsModel.create(arts as Artists);
}
export const putArtists = async(artists: Artists, id: string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndUpdate({_id: id}, artists);
}
export const deleteArtists = async(id: string): Promise<Artists|null>  => {
    return ArtistsModel.findOneAndDelete({_id: id});
}