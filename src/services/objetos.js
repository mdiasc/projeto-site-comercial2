import axios from "axios";

const objetosAPI = axios.create({baseURL:'http://localhost:3001/api'})

function getObjetos(){
    const response = objetosAPI.get('/')

    return response.data
}
 export{
    getObjetos
 }