export interface IPropsLogin {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsReg {
    setFirstName: (value: string) => void
    setUserName: (value: string) => void
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    navigate: (to: string) => void
}

export interface IAuthState {
    user: IPublicUser
    isLogged: boolean
}

interface IPublicUser {
    id: number | null
    firstname: string
    username: string
    email: string
    createdAt: string
    updatedAt: string
    watchlist: IWatchlist
}

interface IWatchlist {
    id: number | null
    name: string
    assetId: string
    email: string
    createdAt: string
    updatedAt: string
    userId: number | null
}