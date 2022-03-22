import { AxiosError } from "axios"
import { Response } from "~/services/types"
import { ResponseState } from "~/store/types"

const responseError = <T>(res: AxiosError<Response<T>>): ResponseState<T> => {
    return {
        isLoading: false,
        data: res.response?.data?.data,
        ok: false,
        status: res.response?.status,
    }
}

export default responseError