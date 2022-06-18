import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:3000'

export default{
    getAllCountry(){
        return Axios.get('/country')
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return Promise.reject=(err)
            })
    }
}