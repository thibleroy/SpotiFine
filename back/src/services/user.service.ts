import {UserModel, User} from '../../../lib/model/user.model';
export const getUser = async(spotify_id: string): Promise<User|null> => {
    return UserModel.findOne({spotify_id: spotify_id});
}
export const postUser = async(spotify_id: string): Promise<User|null> => {
    const user = new UserModel({spotify_id: spotify_id});
    return user.save();
}
export const deleteUser = async(spotify_id: string): Promise<User|null> => {
    return UserModel.findOneAndDelete({spotify_id: spotify_id});
}
