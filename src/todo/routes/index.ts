import { LazyRouteObject } from "router/utils/types"
import { TodoPath } from "todo/paths"

const todoRoutes: LazyRouteObject[] = [
    {
        path: TodoPath.Todo,
        Component: () => import('todo/routes/todo'),
    }
]

export default todoRoutes
