import { useAuthState } from "react-firebase-hooks/auth"
import { AiOutlineLike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { GiShare } from "react-icons/gi"
import { MdSend } from "react-icons/md"
import { auth } from "../../firebase"
import FeedItemIcons from "./FeedItemIcons"

function Post({ name, description, message, timestamp }, ) {

    const [user] = useAuthState(auth)
    return (
        <>
        <div className="py-10 ">
         <div className="border w-96  py-4 rounded-lg   shadow-md h-40 ">
             <div className="flex flex-row">
         <img src={user?.photoURL}  className="rounded-full h-8 object-contain cursor-pointer ml-3  "/>
             <h1 className="ml-2 mt-2 text-xs text-gray-400 font-medium">{name}</h1>
             </div>
             
             <h1 className="ml-3 mt-2 text-lg">{message}</h1>
             
             <div className="flex flex-row justify-evenly ">
          <FeedItemIcons title="Like" Icon={AiOutlineLike} color="#979CA6" />
          <FeedItemIcons
            title="Comment"
            Icon={FaRegCommentDots}
            color="#979CA6"
          />
          <FeedItemIcons title="Share" Icon={GiShare} color="#979CA6" />
          <FeedItemIcons title="Send" Icon={MdSend} color="#979CA6" />
        </div>
             
         </div>
         </div>
         
        </>
    )
}

export default Post
