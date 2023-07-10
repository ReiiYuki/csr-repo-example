import { AppPath } from "app/paths"
import { LazyRouteObject } from "router/utils/types"
import todoRoutes from "todo/routes"
import userRoutes from "user/routes"

const appRoutes: LazyRouteObject[] = [
    {
        path: AppPath.BasePath,
        Component: () => import('app/routes/~'),
        children: [
            ...userRoutes,
            ...todoRoutes,
        ]
    }
]

export default appRoutes
