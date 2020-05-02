import {Request, Response, NextFunction} from 'express';
import {deleteArtists, getArtists, postArtists, putArtists} from "../services/artists.service";
import {ErrorHandler} from "../utils/error.util";
import {artistsErrors} from '../../../lib/wording/back/error.wording';
export const artistsGetController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = await getArtists(<string> req.query.spotifyId);
        if (artists) res.send({value: artists});
        else throw new ErrorHandler(404, artistsErrors.NOT_FOUND)
    } catch (e) {
        next(e);
    }
}

export const artistsPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        console.log('artists', artists);
        if (artists) {
            const existingArtists = await getArtists(<string> req.query.spotifyId);
            if (!existingArtists) {
                const insertedArtists = await postArtists(artists, <string> req.query.spotifyId);
                if (insertedArtists) res.send({value: insertedArtists});
                else throw new ErrorHandler(500, artistsErrors.DB_PROBLEM);
            } else throw new ErrorHandler(409, artistsErrors.ALREADY_EXISTS);
        } else throw new ErrorHandler(400, artistsErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const artistsPutController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            const existingArtists = await getArtists(<string> req.query.spotifyId);
            if (existingArtists) {
                const updatedArtists = await putArtists(artists, <string> req.query.spotifyId);
                if (updatedArtists) res.send({value: updatedArtists});
                else throw new ErrorHandler(500, artistsErrors.DB_PROBLEM);
            } else throw new ErrorHandler(409, artistsErrors.ALREADY_EXISTS);
        } else throw new ErrorHandler(400, artistsErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}

export const artistsDeleteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            const existingArtists = await getArtists(<string> req.query.spotifyId);
            if (existingArtists) {
                const deletedArtists = await deleteArtists(<string> req.query.spotifyId);
                if (deletedArtists) res.send({value: deletedArtists});
                else throw new ErrorHandler(500, artistsErrors.DB_PROBLEM);
            } else throw new ErrorHandler(404, artistsErrors.NOT_FOUND);
        } else throw new ErrorHandler(400, artistsErrors.BAD_REQUEST_BODY);
    } catch (e) {
        next(e);
    }
}
