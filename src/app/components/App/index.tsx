import appRoutes from "app/routes"
import createLazyRouter from "router/utils/createLazyRouter"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"

const router = createLazyRouter(appRoutes)

const App = () => (
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
)

export default App
