import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();
 

    /* const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => {
            console.log(data[0])
            setData(data[0])
        })
    }, []) */


    return (
        <div className='m-4 text-black p-4 text-3xl'>
            <h3>{data[0].name}</h3>
            <h4>{data[0].email}</h4>
            <h4>{data[0].phone}</h4>
            <h4>{data[0].website}</h4>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    return response.json();
}
