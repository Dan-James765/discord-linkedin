import { AiOutlinePlus } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa';

function Home() {
    return (
        <>
        <div className="flex">
            <div className=" bg-gray-800 h-screen w-20 flex flex-col items-center pt-6">
                <div className="pb-2">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" alt="" className="h-12 bg-gray-900 rounded-full p-2 hover:bg-discord_purple transition duration-200 ease-in-out cursor-pointer"/>
                </div>
                <hr className="border-gray-400 border-1 w-8 mx-auto " />
                <div className="space-y-4 pt-4 flex items-center flex-col">
                    <img src="https://forums2.cubiccastles.com/uploads/editor/y7/3d73bziwurfn.png" alt="" className="homeicons"/>
                    <img src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/198516518_10218960170982832_6052204744790778098_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ObI00VosJ3kAX9ikOnF&_nc_ht=scontent.flhr3-3.fna&oh=903c4add484938fe01a9a9cb79d7c4cc&oe=60E82EDD" alt="" className="homeicons"/>
                    <img src="https://scontent.flhr3-4.fna.fbcdn.net/v/t1.6435-9/54256140_10220194386076254_9036174014652874752_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7l6DGrEopGQAX-olFrE&_nc_ht=scontent.flhr3-4.fna&oh=032a220f8ade3cbe7ff45e18599dd9e2&oe=60E8DC45" alt="" className="homeicons"/>
                    <AiOutlinePlus className="h-12 text-4xl   text-green-500 cursor-pointer hover:text-white  "/> 
                </div>

            </div>
        <div className="h-screen bg-gray-700 w-64 ">
            <div className="flex py-6 px-5 justify-between items-center hover:bg-gray-800 cursor-pointer">
            <h1 className="font-semibold text-white">Official Supa Server...</h1>
            <FaChevronDown className="text-white"/> 
            </div>
            <hr className="border-gray-900 border-1  mx-auto w-full " />
            <div className="flex items-center">
            <FaChevronDown className="servertext h-4 text-xl pl-2 "/> 
                <h1 className="servertext pl-2">Channels</h1>
                <BiPlus className="servertext ml-auto h-8 w-8 pr-3 cursor-pointer hover:text-white"/> 
            </div>
        </div>
        
        </div>
            
        </>
    )
}

export default Home
