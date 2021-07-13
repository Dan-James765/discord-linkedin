import Header from "./Header";
import { BiGift, BiSmile } from "react-icons/bi";
import FeedItemIcons from "./FeedItemIcons";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { RiArticleLine } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Trending() {

    

const [user] = useAuthState(auth)

    return (
        <>
        <Header/> 
        <div className="flex items-center justify-center pt-10">
        <div className="border  w-96  py-4 rounded-lg   shadow-xl h-40 ">
            <div className="flex justify-center align-middle ">
        <img src={user?.photoURL} alt="" className="rounded-full h-10 object-contain cursor-pointer flex "/>
        <div className="flex items-center p-2.5 mx-5 mb-7 rounded-lg bg-gray-200 hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out ">
            
            <form className=" outline-none cursor-pointer w-56">
            <input className="outline-none bg-transparent cursor-pointer"  />
                    <button hidden type="submit" >Send</button>
                    </form>
            <BiGift  className="mr-2 headerlinks"/>
                    <BiSmile className="headerlinks"/> 
            </div>
            </div>
            


            <div className="flex-row flex  justify-around">
            <FeedItemIcons title="Photo" Icon={MdPhoto} color="#70B5F9" />
            <FeedItemIcons title="Video" Icon={RiVideoFill} color="#7FC15E" />
            <FeedItemIcons
              title="Event"
              Icon={FaRegCalendarCheck}
              color="#E7A33E"
            />
            <FeedItemIcons
              title="Write Article"
              Icon={RiArticleLine}
              color="#F5987E"
            />
          </div>



        </div>
        </div>

        
            
        </>
    )
}

export default Trending
