import {ApiRoute} from "../../restful/interfaces";
import {test_route} from "../../restful/test_factory";
import {get_methods} from "../../restful/utils";

const methods = get_methods('user', ['GET', 'POST', 'DELETE']);
const userRoute: ApiRoute = {route: 'user', methods: methods}

test_route(userRoute);
