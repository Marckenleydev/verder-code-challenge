
import React from 'react'
import { useLocation } from 'react-router-dom';
import Post from '../components/Post'
import  { UserPost } from '../hooks/userHooh'

function UserPosts() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    
    const users = UserPost(id)
  return (
    <div className=" mt-10 mx-auto w-9/12 bg-white">
    <div className="flex flex-wrap justify-center gap-4 p-8">
    {users.map((user,index)=>{
        return         <Post key ={index} {...user}/>
    })}


    </div>

    </div>
  )
}

export default UserPosts