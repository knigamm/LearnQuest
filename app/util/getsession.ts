import { cookies } from "next/headers"

const getSession = () =>{
    const response = cookies().get('session')
    return response
}

export default getSession