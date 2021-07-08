import { FaUserFriends } from 'react-icons/fa';
import { SiSparkpost } from 'react-icons/si';
import {AiFillHome } from 'react-icons/ai';

function Header() {
    return (
        <>
        
            <header className="flex items-center justify-around bg-blue-900 pt-2">
                <div>
                    <img className="h-12 object-contain" src="https://upe.cs.fiu.edu/wp-content/uploads/sites/3/2018/12/Discord-LogoWordmark-White.png" alt="" />
                </div>
<div className="flex space-x-7 text-white font-semibold group">
   <h1 className="headerlinks">Home</h1>
   <h1 className="headerlinks">Download App</h1>
   <h1 className="headerlinks">Services</h1>
   <h1 className="headerlinks">Walkthrough</h1>
</div>
<div className="flex space-x-6 text-white text-lg items-center">
    <AiFillHome className="headerlinks"/>
    <FaUserFriends className="headerlinks"/>
    <SiSparkpost className="headerlinks"/>
    
    <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none  transition duration-200 ease-in-out whitespace-nowrap font-medium text-black hover:text-gray-600">Login</button>
    
</div>
</header>
        
            
        </>
    )
}

export default Header