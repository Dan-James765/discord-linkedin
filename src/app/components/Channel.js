import { BiHash } from "react-icons/bi"

function Channel({id, channelName}) {
    return (
        <>
        <div className="font-medium hover:bg-gray-600 py-1 rounded-md hover:text-white cursor-pointer text-gray-400 w-full px-2">
        <h1 className="flex items-center"> <BiHash/> {channelName}</h1>
        </div>
        </>

    )
}

export default Channel
