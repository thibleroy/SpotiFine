import {UserModel, User} from '../models/user.model';
export const get_user = async(spotify_id: string): Promise<User|null> => {
    return UserModel.findOne({spotify_id: spotify_id});
}
export const post_user = async(spotify_id: string): Promise<User|null> => {
    const user = new UserModel({spotify_id: spotify_id});
    return user.save();
}
export const delete_user = async(spotify_id: string): Promise<User|null> => {
    return UserModel.findOneAndDelete({spotify_id: spotify_id});
}
