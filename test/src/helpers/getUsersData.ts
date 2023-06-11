import axios from "axios"

export const getUsersData = (url: string): any => {
    const data = axios.get(url).then((response: any) => response.data)
    return data
}