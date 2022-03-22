import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Swal from 'sweetalert2';
import './Conversation.css';

const Conversation = ({ conversation, loginUsers }) => {
    const [friendId, setFriendId] = useState({})
    useEffect(() => {
        const firend = conversation?.member?.find((m) => m !== loginUsers?._id)
        console.log(firend, "firend");
        const getFriend = async () => {
            try {
                const res = await axios.get(`http://localhost:7050/getUsers/${firend}`)
                setFriendId(res?.data);
            } catch (err) {
                console.log(err);
            }
        }
        getFriend()
    }, [loginUsers?._id, conversation?.member])

    const handleDeleteConversation = (conversationId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:7050/conversationDelete/${conversationId}`, {
                    method: 'DELETE',
                    headers: { 'content-type': 'application/json' },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            window.location.reload();
                            Swal.fire(
                                'Done',
                                'The Conversation has been successfully deleted!',
                                'success'
                            )
                        }
                    })
            }
        })
   
    }
    return (
        <div className='conversation'>
            <div>
                <img className='conversation-img' src={friendId?.photoURL ? friendId?.photoURL : "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"} alt="" />
                <span className='conversation-name'>
                    {friendId?.adminName}
                </span>
            </div>
            <span onClick={() => handleDeleteConversation(conversation?._id)} className='threeDot'>< BsThreeDots /></span>
        </div>
    );
};

export default Conversation;