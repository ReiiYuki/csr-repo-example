import { atom } from 'recoil'
import { UserAtomKey } from 'user/keys'
import { User } from 'user/types'

const userAtom = atom<User | null>({
    key: UserAtomKey.User,
    default: null,
})

export default userAtom
