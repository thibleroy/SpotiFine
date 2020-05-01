import {Request, Response, NextFunction} from 'express';
import {deletePlaylist, getPlaylist, postPlaylist, putPlaylist, getPlaylists} from '../services/playlist.service'
import {playlistErrors} from '../../../lib/wording/back/error.wording';
import {ErrorHandler} from "../utils/error.util";
import {mongoose} from "@typegoose/typegoose";

export const playlistGetController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (mongoose.isValidObjectId(req.params.id)) {
            const playlist = await getPlaylist(<string>req.params.id);
            if (playlist) res.send({value: playlist});
            else throw new ErrorHandler(404, playlistErrors.NOT_FOUND)
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_PARAMS)

    } catch (e) {
        next(e);
    }
}
export const playlistsGetController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const playlists = await getPlaylists(<string>req.query.spotifyId);
        if (playlists) res.send({value: playlists});
        else throw new ErrorHandler(404, playlistErrors.NOT_FOUND);
    } catch (e) {
        next(e);
    }

}
export const playlistPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const playlist = req.body;
        if (playlist) {
            const insertedPlaylist = await postPlaylist(playlist, <string>req.query.spotifyId);
            if (insertedPlaylist) res.send({value: insertedPlaylist});
            else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const playlistPutController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            if (mongoose.isValidObjectId(req.params.id)) {
                const existingArtists = await getPlaylist(<string>req.params.id);
                if (existingArtists) {
                    const updatedArtists = await putPlaylist(artists, <string>req.params.id);
                    if (updatedArtists) res.send({value: updatedArtists});
                    else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
                } else throw new ErrorHandler(409, playlistErrors.ALREADY_EXISTS);
            } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_PARAMS);
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const playlistDeleteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (mongoose.isValidObjectId(req.params.id)) {
            const existingPlaylist = await getPlaylist(<string>req.params.id);
            if (existingPlaylist) {
                const deletedPlaylist = await deletePlaylist(<string>req.params.id);
                if (deletedPlaylist) res.send({value: deletedPlaylist});
                else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
            } else throw new ErrorHandler(404, playlistErrors.NOT_FOUND);
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_PARAMS);
    } catch (e) {
        next(e);
    }
}
