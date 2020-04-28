import {prop, getModelForClass} from '@typegoose/typegoose';

export class User{
    @prop()
    public spotify_id?: string;

    @prop()
    private refresh_token?: string
}
// Export the model and return your IUser interface
export const UserModel = getModelForClass(User);
