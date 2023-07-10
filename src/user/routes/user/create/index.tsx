import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react"
import { useSetRecoilState } from "recoil"
import userAtom from "user/atoms/userAtom"

const UserPage = () => {
    const setUser = useSetRecoilState(userAtom)
    const [name, setName] = useState('')

    const onNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value }}) => {
        setName(value)
    }, [])

    const onNext: FormEventHandler<HTMLFormElement> = useCallback(event => {
        event.preventDefault()

        setUser({
            name,
        })
    }, [name])

    return (
        <form className="flex flex-col h-screen w-screen align-middle justify-center" onSubmit={onNext}>
            <input name="name" placeholder="Input Name" value={name} onChange={onNameChange} />
            <button type="submit">Next</button>
        </form>
    )
}

export default UserPage
