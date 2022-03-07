import axios from 'axios';
import { useEffect, useState } from 'react';
import './Conversation.css';

const Conversation = ({ conversation , loginUsers}) => {
    const [friendId, setFriendId] = useState({})

    useEffect(() => {
        const firend = conversation?.member?.find((m) => m !== loginUsers?._id)
        console.log(firend);
        const getFriend = async () => {
            try {
                const res = await axios.get(`http://localhost:7050/user/${firend}`)
                setFriendId(res?.data);
            } catch(err) {
                console.log(err);
            }
        }
        getFriend()
    }, [loginUsers?._id, conversation?.member])
    console.log(friendId, "friendId");
   
    return (
        <div className='conversation'>
            <img className='conversation-img' src= {friendId?.photoURL ? friendId?.photoURL : "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}alt="" />
            <span className='conversation-name'>
            {friendId?.displayName}
            </span>
        </div>
    );
};

export default Conversation;