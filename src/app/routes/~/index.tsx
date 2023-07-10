import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TodoPath } from "todo/paths";
import userAtom from "user/atoms/userAtom";
import { UserPath } from "user/paths";

const RootPage = () => {
    const user = useRecoilValue(userAtom)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user, '<<<')
       navigate(user ? TodoPath.Todo : UserPath.CreateUserPath, {
        replace: true,
       })
    }, [user])

    return <Outlet />
}

export default RootPage
