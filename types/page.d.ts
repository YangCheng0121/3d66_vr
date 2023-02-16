declare namespace Page {
    interface Params {
        limit?: number;
        page?: number;
    }

    interface Result<T> {
        currPage: number;
        list: T[];
        pageSize: number;
        totalCount: number;
        totalPage: number;
    }
}