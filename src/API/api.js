import * as axios from "axios";


export const template = () => {
    return axios.create({
            baseURL : 'https://api.ke22.ru',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
    )
}

export const apiAddress={
    searchLocality(nameLocality,count){
        return template().get(`/geo/locality/?term=${nameLocality}&count=${count}`)
    },
}