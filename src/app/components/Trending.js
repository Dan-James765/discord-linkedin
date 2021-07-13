import Header from "./Header";
import { BiGift, BiSmile } from "react-icons/bi";
import FeedItemIcons from "./FeedItemIcons";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { RiArticleLine } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import  { useState } from 'react'
import { useEffect } from "react";
import firebase from "firebase";
import Post from "./Post";



function Trending() {

    

const [user] = useAuthState(auth)
const [posts, setPosts] = useState([])
const [input, setInput] = useState("")



useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);


  const sendPost = (e) => {
    e.preventDefault();
  
    db.collection("posts").add({
      name: "user.displayName",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      
    });
  
    setInput("");
  };
  



    return (
        <>
        <Header/> 
        <div className="flex items-center justify-center pt-10 flex-col">
        <div className="border  w-96  py-4 rounded-lg   shadow-lg h-40 ">
            <div className="flex justify-center align-middle ">
        <img src={user?.photoURL} alt="" className="rounded-full h-10 object-contain cursor-pointer flex "/>
        <div className="flex items-center p-2.5 mx-5 mb-7 rounded-lg bg-gray-200 hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out ">
            
            <form className=" outline-none cursor-pointer w-56">
            <input className="outline-none bg-transparent cursor-pointer" value={input}
                  onChange={(e) => setInput(e.target.value)}/>
                    <button hidden type="submit" onClick={sendPost}>Send</button>
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
        <div className="">
        {posts.map(
            ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                timestamp={timestamp}
              />
            )
          )}
          </div>

        
              
           

        </div>

        
            
        </>
    )
}

export default Trending
