import {useEffect, useState} from 'react'
import { UserApi} from '../api/UserApi'

export const useUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers();
    }, [])// dependencias

    const getUsers = async ()=>{
        const resp = await UserApi.get('https://reqres.in/api/users?page=1')
        console.log(resp.data.data);
        setUsers(resp.data.data)
    }
    return{
        users
    }

}