import { AxiosResponse } from "axios"
import { Response } from "~/services/types"
import { ResponseState } from "~/store/types"

const responseSuccess = <T>(res: AxiosResponse<Response<T>>): ResponseState<T> => {
    return {
        isLoading: false,
        data: res.data.data,
        ok: res.data.ok,
        status: res.status,
    }
}

export default responseSuccess