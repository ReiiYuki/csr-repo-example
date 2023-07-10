import { LazyRouteObject } from "router/utils/types"
import { RouteObject } from "react-router-dom"

function convertLazyRouteObject(lazyRouteObject: LazyRouteObject): RouteObject {
    const { Component, children, ...routeObject } = lazyRouteObject
    return {
        ...routeObject,
        lazy: async () => {
            const { default: RouteComponent} = await Component()

            return {
                Component: RouteComponent,
            } as RouteObject
        },
        children: children?.map(convertLazyRouteObject),
    } as RouteObject
}

export default convertLazyRouteObject
