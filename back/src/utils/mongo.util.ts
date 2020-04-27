import {connect} from 'mongoose';
import {mongodb_config} from '../configs/mongodb.config';
export const connect_db = async () => {
     const connection = connect(`mongodb://${mongodb_config.url}:${mongodb_config.port}/spotifine`, {useUnifiedTopology: true, useNewUrlParser: true});
     if (connection) console.log('connected to db !');
     else console.error('cannot connect to db');
}
