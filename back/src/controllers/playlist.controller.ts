import {Request, Response, NextFunction} from 'express';
import {deletePlaylist, getPlaylist, postPlaylist, putPlaylist} from '../services/playlist.service'
import {playlistErrors} from '../../../lib/wording/back/error.wording';
import {ErrorHandler} from "../utils/error.util";
import {mongoose} from "@typegoose/typegoose";

export const playlistGetController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('path', req.path);
        if (mongoose.isValidObjectId(req.path)) {

        }
        const playlist = await getPlaylist(<string>req.path);
        if (playlist) res.send({value: playlist});
        else throw new ErrorHandler(404, playlistErrors.NOT_FOUND)
    } catch (e) {
        next(e);
    }
}

export const playlistPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const playlist = req.body;
        console.log('playlst', playlist);
        if (playlist) {
            const existingPlaylist = await getPlaylist(<string>req.path);
            if (!existingPlaylist) {
                const insertedPlaylist = await postPlaylist(playlist, <string>req.query.spotifyId);
                if (insertedPlaylist) res.send({value: insertedPlaylist});
                else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
            } else throw new ErrorHandler(409, playlistErrors.ALREADY_EXISTS);
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const playlistPutController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            const existingArtists = await getPlaylist(<string>req.query.spotifyId);
            if (existingArtists) {
                const updatedArtists = await putPlaylist(artists, <string>req.query.spotifyId);
                if (updatedArtists) res.send({value: updatedArtists});
                else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
            } else throw new ErrorHandler(409, playlistErrors.ALREADY_EXISTS);
        } else throw new ErrorHandler(400, playlistErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const playlistDeleteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('is valid path',mongoose.isValidObjectId(req.path));

        const existingPlaylist = await getPlaylist(<string> req.path);
        if (existingPlaylist) {
            const deletedPlaylist = await deletePlaylist(<string> req.path);
            if (deletedPlaylist) res.send({value: deletedPlaylist});
            else throw new ErrorHandler(500, playlistErrors.DB_PROBLEM);
        } else throw new ErrorHandler(404, playlistErrors.NOT_FOUND);
    } catch (e) {
        next(e);
    }
}
