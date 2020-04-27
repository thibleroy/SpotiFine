import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document{
    id: string;
    token: string
}

const UserSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    token: { type: String, required: true },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('Artists', UserSchema);
