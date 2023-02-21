declare module "*.mp3"
declare namespace NextProps {

    interface Page<T> {
        lang?: string
        langMessage?: any
        setUserInfo?: any
        userInfo?: UserGlobal.UserInfo
        router?: Router
        pageProps: T
        mobile?: boolean
    }

    interface AppPage<T> extends NextProps.Page<T> {
        loginSuccess: (result: any) => boolean;
        login: Function;
    }
}

