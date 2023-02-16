declare namespace HttpResponse {

    interface ResultList<T> {
        code: string | number
        data: T[]
        msg: string
        success: boolean
    }

    interface ResultData {
        code: string | number
        data: any
        msg: string
        success: boolean
    }

}


