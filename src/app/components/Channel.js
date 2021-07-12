import { BiHash } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setChannelInfo } from "../../features/counter/channelSlice"

function Channel({id, channelName}) {


    const dispatch = useDispatch()
    const history = useHistory()

    const setChannel = () => {
        dispatch(
            setChannelInfo({
            channelId: id, 
            channelName: channelName, 

        }))

        history.push(`/inbox/${id}`)
            }


    return (
        <>
        <div onClick={setChannel} className="font-medium hover:bg-gray-600 py-1 rounded-md hover:text-white cursor-pointer text-gray-400 w-full px-2">
        <h1 className="flex items-center"> <BiHash/> {channelName}</h1>
        </div>
         
        </>

    )
}

export default Channel
