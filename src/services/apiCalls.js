
import axios from 'axios';

export const bringUsers = async () => {

    return await axios.get("https://dummyjson.com/users")

};