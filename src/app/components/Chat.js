import { useSelector } from "react-redux"
import { selectChannelName } from "../../features/counter/channelSlice"
import { BsBellFill, BsPlusCircleFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiGift, BiSmile } from "react-icons/bi";



function Chat() {

    const channelName = useSelector(selectChannelName)
    
  
    return (
        <>
        <div className="h-screen flex flex-col">
            <header className="py-8 justify-between flex">
                <div className="">
            <h1 className=" pl-4 text-white font-medium flex items-center">{channelName}</h1>
            </div>
            
            <div className="flex items-center  space-x-4 pr-10 ">
                <BsBellFill className="headerlinks"/> 
                <AiFillMessage className="headerlinks"/> 
                <FaUserAlt className="headerlinks"/> 
            
                <input type="text" placeholder="Search... " className=" rounded-full bg-black placeholder-opacity-40 pl-2 cursor-pointer hover:bg-gray-300  delay-75  transition duration-200 ease-in-out focus:outline-none" /> 
            </div>            
            </header>
            <hr className="border-gray-500 border-1 pt-8" />
            <main className="flex-grow  scrollbar-hide overscroll-auto"></main>
        <div className="flex items-center p-2.5 mx-5 mb-7 rounded-lg bg-gray-500">
            <BsPlusCircleFill className="headerlinks mr-4"/>
            <form className="flex-grow">
            <input type="text" className=" cursor-pointer bg-transparent focus:outline-none text-white w-full placeholder-text-white text-sm" />
                    <button hidden type="submit" >Send</button>
                    </form>
            <BiGift  className="mr-2 headerlinks"/>
                    <BiSmile className="headerlinks "/> 
            </div>

            
        </div>
            
        </>
    )
}

export default Chat
