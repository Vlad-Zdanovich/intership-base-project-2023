import { authApi } from "../otp/lib"
import { LoginInfoResponse, LoginRequest } from "./model"

export const postLogin = async (body: LoginRequest) => {
    const response = await authApi.post<LoginInfoResponse>("/enter", body)
    return response.data
}

