
import axios from 'axios';

const root = 'http://localhost:3000'

export const bringUsers = async () => {

    return await axios.get("https://dummyjson.com/users")

};

export const loginMe = async (body) => {

    //Esta línea tendría que devolver un token.......
    // return await axios.post(`${root}/users/login`, body);

    let user = {
        token: "eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiRWRkaWVkZW4iLCJyb2xlSWQiOjEsImlhdCI6MTY3ODEyNDM2MywiZXhwIjoxNjgwNzE2MzYzfQ",
        name: "Paula"
    }
    return user;
}