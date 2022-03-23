import { BsThreeDots } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { format } from 'timeago.js';
import "./Message.css";

const Message = ({ message, own, user, fd }) => {
    const handleDeleteMessage = (messageId) => {
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
                fetch(`http://localhost:7050/messageDelete/${messageId}`, {
                    method: 'DELETE',
                    headers: { 'content-type': 'application/json' },
                })
                    .then(res => res.json())

                    .then(data => {
                        if (data.deletedCount) {
                            window.location.reload();
                            Swal.fire(
                                'Done',
                                'The Message has been successfully deleted!',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className={own ? 'message own' : "message"}>
            <div className="message-top">
                <span onClick={() => handleDeleteMessage(message?._id)} className='threeDot mx-3'>< BsThreeDots /></span>
                <img className='message-img' src={own ? user?.photoURL ? user?.photoURL  : "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" : "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"} alt="" />
                <p className='message-text'>
                    {message?.text}
                </p>
            </div>
            <div className="message-button">
                {format(message?.time)}
            </div>
        </div>
    );
};

export default Message;