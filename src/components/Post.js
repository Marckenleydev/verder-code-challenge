import React from 'react'
import {Link} from "react-router-dom"

function Post({id,title,userId,body}) {
  return (
    <div>
    <Link className="link no-underline" to={`./post/${id}`} >
        <div className='w-80 border    '>
            <h5 className='text-gray-500'>Title marc</h5>
            <div className="py-6 px-4">
                <h4 className="font-bold ">{title?.substring(0, 20)}</h4>
                <p className="text-gray-500">{body?.substring(0, 79)}...</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Post