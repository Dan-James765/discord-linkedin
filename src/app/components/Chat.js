import { useSelector } from "react-redux"
import { selectChannelId, selectChannelName } from "../../features/counter/channelSlice"
import { BsBellFill, BsPlusCircleFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiGift, BiSmile, BiTrendingUp } from "react-icons/bi";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import firebase from "firebase"
import { useCollection } from "react-firebase-hooks/firestore"
import Messages from "./Messages";
import { Link } from 'react-router-dom'





function Chat() {

    const channelName = useSelector(selectChannelName)
    const channelId = useSelector(selectChannelId)
    const inputRef = useRef("")
    const chatRef = useRef(null)
    const [user] = useAuthState(auth)

    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        })

    }


    const sendMessage = (e) => {
        e.preventDefault()

        if (inputRef.current.value !== ""){
            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email, 

            })

        }
        inputRef.current.value = ""
scrollToBottom()
        
    }

    const [messages] = useCollection(
        channelId && 
        db
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    )

  
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
                <Link to="/trending">
                <BiTrendingUp className="headerlinks"/> 
                </Link>
                <input type="text" placeholder="Search... " className=" rounded-full bg-black placeholder-opacity-40 pl-2 cursor-pointer hover:bg-gray-300  delay-75  transition duration-200 ease-in-out focus:outline-none" /> 
            </div>            
            </header>
            <hr className="border-gray-500 border-1 pt-8" />
            <main className="flex-grow  overflow-y-scroll scrollbar-hide  ">
            {messages?.docs.map((doc) => {
                const {message, timestamp, name, photoURL, email} = doc.data()

                return <Messages key={doc.id} id={doc.id} message={message} timestamp={timestamp} name={name} email={email} photoURL={photoURL}/>
            })}
            <div ref={chatRef} className="pb-16"/>
        </main>

        <div className="flex items-center p-2.5 mx-5 mb-7 rounded-lg bg-gray-500 hover:bg-gray-700 cursor-pointer transition duration-500 ease-in-out">
            <BsPlusCircleFill className="headerlinks mr-4"/>
            <form className="flex-grow ">
            <input  ref={inputRef} disabled={!channelId}  placeholder={channelId ? `Message #${channelName}` : "Select a channel"} type="text" className="cursor-pointer bg-transparent focus:outline-none text-white w-full placeholder-text-white text-sm " />
                    <button hidden type="submit" onClick={sendMessage}>Send</button>
                    </form>
            <BiGift  className="mr-2 headerlinks"/>
                    <BiSmile className="headerlinks"/> 
            </div>

            
        </div>
            
        </>
    )
}

export default Chat
