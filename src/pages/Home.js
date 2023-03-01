
import Post from '../components/Post'

import  {UserData, UserPost } from '../hooks/userHooh'


function Home() {

const users = UserData()
const userPosts = UserPost(2);
console.log(userPosts)
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

export default Home