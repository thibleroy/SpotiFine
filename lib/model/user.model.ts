import {prop, getModelForClass} from '@typegoose/typegoose';

export class User{
    @prop()
    public id?: string;
}
// Export the model and return your IUser interface
export const UserModel = getModelForClass(User);