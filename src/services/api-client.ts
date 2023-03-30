import axios from "axios";


export default axios.create({ 
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'f9c69ba8ffa341bab228f611e1043075'
    }
})