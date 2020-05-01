import {Request, Response, NextFunction} from 'express';
import {delete_artists, get_artists, post_artists, put_artists} from "../services/artists.service";
import {ErrorHandler} from "../utils/error.util";

export const artists_get_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = await get_artists(<string> req.query.spotifyId);
        if (artists) res.send({value: artists});
        else throw new ErrorHandler(404, 'Artists not found')
    } catch (e) {
        next(e);
    }
}

export const artists_post_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        console.log('artists', artists);
        if (artists) {
            const existingArtists = await get_artists(<string> req.query.spotifyId);
            if (!existingArtists) {
                const insertedArtists = await post_artists(artists, <string> req.query.spotifyId);
                if (insertedArtists) res.send({value: insertedArtists});
                else throw new ErrorHandler(500, 'artists collection db problem');
            } else throw new ErrorHandler(409, 'Artists already exist for this user');
        } else throw new ErrorHandler(400, 'No artists found in body');
    } catch (e) {
        next(e);
    }
}

export const artists_put_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            const existingArtists = await get_artists(<string> req.query.spotifyId);
            if (existingArtists) {
                const updatedArtists = await put_artists(artists, <string> req.query.spotifyId);
                if (updatedArtists) res.send({value: updatedArtists});
                else throw new ErrorHandler(500, 'artists collection db problem');
            } else throw new ErrorHandler(409, 'Artists do not exist for this user');
        } else throw new ErrorHandler(400, 'No artists found in body');
    } catch (e) {
        next(e);
    }
}

export const artists_delete_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = req.body;
        if (artists) {
            const existingArtists = await get_artists(<string> req.query.spotifyId);
            if (existingArtists) {
                const deletedArtists = await delete_artists(<string> req.query.spotifyId);
                if (deletedArtists) res.send({value: deletedArtists});
                else throw new ErrorHandler(500, 'artists collection db problem');
            } else throw new ErrorHandler(404, 'No artists found in db');
        } else throw new ErrorHandler(400, 'No artists found in body');
    } catch (e) {
        next(e);
    }
}
