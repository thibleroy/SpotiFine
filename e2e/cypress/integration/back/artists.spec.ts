import {ApiRoute} from "../../restful/interfaces";
import {test_route} from "../../restful/test_factory";
import {get_methods} from "../../restful/utils";
const methods = get_methods('artists', ['GET', 'POST', 'DELETE']);
const artistsRoute: ApiRoute = {route: 'artists', methods: methods}

test_route(artistsRoute);
