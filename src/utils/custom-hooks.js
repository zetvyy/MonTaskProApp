import { useState } from 'react';

export default function useDataInput() {
    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    function setInputData(data) {
        if(data) {
            setDataUser({
                ...dataUser,
                [data.target.id] : data.target.value
            })
        }
    }
    return [dataUser, setInputData];
}