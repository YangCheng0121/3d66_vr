
declare module "*.mp3"
declare function initGeetest(data: any, cb: Function): Promise<any>;
declare var GeetestInitSuccess: boolean

declare namespace SignalGlobal {
    interface CreateSignal {
        protocol?: boolean
    }
    interface Info {
        allowTrade?: number
        nationalFlag?: string
        areaId?: number
        avatar?: string
        certifyStatus?: number
        description?: string
        exchangeId?: number
        auditStatus?: any
        id?: number
        logo?: string
        userName?: string
        startMinBalance?: number
        passphrase?: string
        accountId?: any
        subscribeCount?: number
        accountNickName?: string
        freeTimeType?:number
        followers?: number
    }
}


interface CreateSignal {
    protocol?: boolean
    platform?: number
    platformName?: string
    platformLogo?: string
    passphrase?: string
    secretKey?: string
    apikey?: string
    settlements?: string
    avatar?: string
    minBalance?: string
    accountType?: string
    descript?: string
    userOrient?: string
    accountNickName?: string
    remark?: string
    vouchers?: []
    instType?: string
    instTypeId?: string
}



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



declare namespace FormProps {

    interface SetFollow extends SignalGlobal.Info {
        langBase?: string
        onFinish: Function
        onBack: Function
    }
}




interface Message {
    accountId: number
    avatar?: string
    certifyStatus?: any
    childrenList?: Message[]
    commentLevel?: number
    content?: string | []
    createTime?: string
    id: number
    likeNum: number
    memberId: number
    parentCommentId: number
    parentCommentMemberId: number
    replyCommentId?: number
    replyCommentMemberId?: number
    userName?: string
    [propName: string]: any;
}


declare namespace Widget {
    interface props {
        mobile?:boolean
        langBase?: string
        toPage?: Function
    }
}




declare namespace Flex {

   
}