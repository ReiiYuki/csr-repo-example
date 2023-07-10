import { LazyRouteObject } from "router/utils/types"
import { UserPath } from "user/paths"

const userRoutes: LazyRouteObject[] = [
    {
        path: UserPath.CreateUserPath,
        Component: () => import('user/routes/user/create'),
    }
]

export default userRoutes
