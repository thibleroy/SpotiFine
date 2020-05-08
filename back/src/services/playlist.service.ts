import {Playlist, PlaylistModel} from "../../../lib/model/playlist.model";
import {User} from "../../../lib/model/user.model";

export const getPlaylist = async(id: string): Promise<Playlist|null>  => {
    return PlaylistModel.findOne({_id: id});
}

export const getPlaylists = async(spotifyId: string): Promise<Playlist[]|null> => {
    return PlaylistModel.find({'user.spotifyId': spotifyId});
}
export const postPlaylist = async(playlist: SpotifyApi.PlaylistObjectFull, spotifyId: string): Promise<Playlist|null>  => {
    const user: User = {spotifyId: spotifyId};
    const newPlaylist: Playlist = {user: user, playlist: playlist};
    return PlaylistModel.create(newPlaylist as Playlist);
}
export const putPlaylist = async(playlist: Playlist, id: string): Promise<Playlist|null>  => {
    return PlaylistModel.findOneAndUpdate({_id: id}, playlist);
}
export const deletePlaylist = async(id: string): Promise<Playlist|null>  => {
    return PlaylistModel.findOneAndDelete({_id: id});
}
