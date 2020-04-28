import {connect} from 'mongoose';
import {mongodb_config} from '../configs/mongodb.config';
export const connect_db = (db_name: string) => {
     const connection = connect(`mongodb://${mongodb_config.url}:${mongodb_config.port}/${db_name}`, {useUnifiedTopology: true, useNewUrlParser: true});
     if (connection) console.log('connected to db', db_name);
     else console.error('cannot connect to db', db_name);
}
