import { LazyRouteObject } from "router/utils/types";
import { createBrowserRouter } from "react-router-dom";
import convertLazyRouteObject from "router/utils/convertLazyRouteObject";

function createLazyRouter(routes: LazyRouteObject[]) {
    return createBrowserRouter(routes.map(convertLazyRouteObject))
}

export default createLazyRouter
