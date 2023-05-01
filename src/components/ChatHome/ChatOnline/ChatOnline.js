import "./ChatOnline.css";

const ChatOnline = ({ user }) => {
    console.log(user, "userrrrr");
    return (
        <div className='ChatOnline'>
            <div className="ChatOnlineFriend">
                <div className="ChatOnlineFriendImgContainer">
                    <img src={user?.userInfo?.photoURL ? user?.userInfo?.photoURL : "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" } alt="" />
                    <div className="badge-online">
                    </div>
                </div>
                <span>{user?.userInfo?.adminName}</span>
            </div>
        </div>
    );
};

export default ChatOnline;