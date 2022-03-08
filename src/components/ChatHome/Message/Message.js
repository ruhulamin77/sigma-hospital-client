import "./Message.css";

const Message = ({message, own, user, fd }) => {
    return (
        <div className={ own ?  'message own' : "message"}>
            <div className="message-top">
            <img className='message-img' src= { own ? user?.photoURL : fd.photoURL }   alt="" />
            <p className='message-text'>
            {message?.text} 
            </p>
            </div>
            <div className="message-button">
                1 hour ago
            </div>
        </div>
    );
};

export default Message;