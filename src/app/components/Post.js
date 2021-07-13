import { useAuthState } from "react-firebase-hooks/auth"
import { AiOutlineDelete, AiOutlineLike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { GiShare } from "react-icons/gi"

import { auth } from "../../firebase"
import FeedItemIcons from "./FeedItemIcons"
import React, { forwardRef } from "react";


const Post = forwardRef(({ name, email, message, id}, ref ) => {

    const [user] = useAuthState(auth)
    
    

    return (
        <>

        <div className="py-10 " ref={ref}>
         <div className="border w-96  py-4 rounded-lg   shadow-md h-40 ">
             <div className="flex flex-row">
         <img src={user?.photoURL}  alt="" className="rounded-full h-8 object-contain cursor-pointer ml-3  "/>
         <div className="flex flex-col">
             <h1 className="ml-2  text-xs text-gray-900 font-medium">{name}</h1>
             <h1 className="ml-2  text-xs text-gray-400 font-medium">{email}</h1>
             </div>
             </div>
             
             <h1 className="ml-3 mt-2 text-lg truncate">{message}</h1>
             
             <div className="flex flex-row justify-evenly ">
          <FeedItemIcons title="Like" Icon={AiOutlineLike} color="#979CA6" />
          <FeedItemIcons
            title="Comment"
            Icon={FaRegCommentDots}
            color="#979CA6"
          />
          <FeedItemIcons title="Share" Icon={GiShare} color="#979CA6" />
          
          <FeedItemIcons title="Delete" Icon={AiOutlineDelete} color="#979CA6" />
         
          
        </div>
        
             
         </div>
         </div>
         
        </>
    )
})

export default Post
