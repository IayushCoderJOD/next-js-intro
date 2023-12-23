// 'use client'
import React, { useState } from 'react'

interface User{
    id:number;
    name:string;
}

const UserPage = async () => {
    const data=await fetch('https://jsonplaceholder.typicode.com/users',{
        next:{
            revalidate:10
        }
    });
    const json1:User[]=await data.json();
  return (
    <div>
        <h1 className='text-3xl font-bold  ' >User </h1>
        <ul>
            {
            json1.map((user)=>
                <li key={user.id} >{user.name}</li>
            )}
        </ul>
    </div>
  )
}

export default UserPage
