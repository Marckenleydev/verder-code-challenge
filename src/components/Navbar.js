// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers } from '../redux/userSlice'
// import { useEffect } from "react";

import {NavLink} from "react-router-dom"
import {IoIosNotifications} from "react-icons/io"
import {AiFillPlayCircle} from "react-icons/ai"
import {VscSettings} from "react-icons/vsc"
import { useSelector } from 'react-redux';



const Navbar =()=>{
     const postCount = useSelector(state => state.posts.postCount);




    return(
        <nav className="mx-auto w-9/12  py-3 bg-white">
        
        <div className=" ">
          <div className="flex justify-between">
            {/* Left */}
            <ul className=" flex items-center  ">
              <li className="text-blue-600 ml-4"><NavLink to="/"><AiFillPlayCircle className="h-6 w-6"/></NavLink></li>
              <li className="font-bold  ml-4 text-black"><NavLink to="/">Arbit Blog</NavLink></li>
            </ul>
      
            {/* Right */}
            <ul className=" flex items-center  ">
              <li className="font-bold text-gray-400 text-sm mr-4 relative"><NavLink to="/post/1">Posts</NavLink><span className="absolute bg-green-300 bottom-4 w-5 h-5 flex left-6 items-center justify-center rounded-full text-small">{postCount}</span></li>
              <li className="text-gray-500 mr-4"><IoIosNotifications className="h-6 w-6"/></li>
              <li className=" text-gray-500 mr-4"><VscSettings/></li>
              <img className="h-8 w-8 rounded-full mr-4" src="https://media.licdn.com/dms/image/D4D03AQEbpIIy810lFg/profile-displayphoto-shrink_200_200/0/1673812833665?e=1683158400&v=beta&t=ATHSBpt_Svg8IXEhJsFkByx2i0g9MFvJ7awjRCmnyIQ" alt="img"/>
            </ul>
          </div>
        </div>
      </nav>
      )
}

export default Navbar