import {connect} from 'mongoose';
import {mongodb_config} from '../configs/mongodb.config';

export const get_user = async() => {
    await connect(`mongodb://${mongodb_config.url}:${mongodb_config.port}/`, {useUnifiedTopology: true, useNewUrlParser: true});

}
