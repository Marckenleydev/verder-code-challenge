import { useState } from "react";
import {BsArrowLeft,BsFillPencilFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {RiDeleteBinLine} from "react-icons/ri"
 import { addPost, deletePost } from '../redux/userSlice';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom'


const url = "https://jsonplaceholder.typicode.com/posts";

function NewPosts() {
  const postCount = useSelector(state => state.posts.postCount);
  const dispatch = useDispatch();
    const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

      const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)

    const handleAddPost = async () => {
      try {
        const response = await axios.post(`${url}`, { title, body });
        console.log('post created successfully', response.data);
        // handle successful post creation
        dispatch(addPost(id));
      } catch (error) {
        console.error(error);
        // handle error
      }
    };

  const updateUser = async (id) => {
    try {
      const response =  await axios.put(`${url}/${id}`, { title, body });
      console.log(response.data);
      // handle successful update
      console.log('update successfully', response.data);
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log('delete successfully', response.data);
      dispatch(deletePost(id));
      // handle successful deletion
    } catch (error) {
      console.error(error);
      // handle error
    }
  };
  return (
    <div className=" mt-10 mx-auto w-9/12 bg-white">
      <div className='w-1/2 p-8'>
      <div className="flex justify-between">
      <span className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center"><BsArrowLeft/></span> <button
      onClick={handleAddPost}
       className="flex rounded p-1 text-white bg-blue-500 items-center"><AiOutlinePlus/> New Post</button></div>
      <form className='pl-8'>
      <div className='flex flex-col '>
      <label className='mt-4'>Title</label>
        <input
        value={title} onChange={(e) => setTitle(e.target.value)}
         type="text" placeholder='' className="h-8 ml-8 p-2 bg-gray-100 outline-0 font-semibold" />

      </div>

      <div className='flex flex-col '>
      <label className='mt-4'>Details</label>
        <textarea
        value={body} onChange={(e) => setBody(e.target.value)}
         type="text" placeholder='' rows="4" cols="50" className="h-32 ml-8 p-2 bg-gray-100 outline-0 font-semibold" />

      </div>

  
      </form>
      <div className="flex gap-4 justify-end mt-10">
        <button
        disabled={postCount === 0}
         onClick={() => deleteUser(id)}
       
         className="flex rounded p-1 text-white bg-red-500 items-center"><RiDeleteBinLine/>Delete</button> 
         <button
         onClick={() => updateUser(id)}
          className="flex rounded p-1 text-white bg-blue-500 items-center"><BsFillPencilFill/>Update</button>
      </div>
      </div>

    </div>
  )
}

export default NewPosts