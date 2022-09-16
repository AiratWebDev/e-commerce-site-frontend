import React, {useEffect, useState} from 'react';
import axios from "axios";

const FetchCatalogs = () => {
    const [catalogs, setCatalogs] = useState([])

    async function FetchCatalogs() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/catalogs')
        setCatalogs(response.data)
    }

    useEffect(() => {
        FetchCatalogs()
    }, [])


    return catalogs
}

export default FetchCatalogs;