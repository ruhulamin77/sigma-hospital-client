import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import './Messenger.css';



const Messenger = () => {
    // allUsers
    const [users, setUsers] = useState([])
    // me as a login user
    const [loginUsers, setLoginUsers] = useState(null)
    // message
    const [messages, setMessages] = useState([])
    const [arrivalMessages, setArrivalMessages] = useState(null)
    const [newMessages, setNewMessages] = useState("")
    const [curremtChat, setCurremtChat] = useState(null)
    const [conversation, setConversation] = useState([])
    // const [onlineUser, setOnlineUser] = useState([])
    const scrollRef = useRef()
    const socket = useRef()
    const user = useSelector((state) => state.auth.value)

    // find my Id form db
    useEffect(() => {
        axios.get(`http://localhost:7050/users/${user?.email}`).then(res => setLoginUsers(res.data))
    }, [user?.email])
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessages({
                sender: data.senderId,
                text: data.text,
                creareAt: Date.now(),
            })
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:7050/users").then(data => setUsers(data))
    }, [])
    useEffect(() => {
        arrivalMessages && curremtChat?.member.includes(arrivalMessages.sender) && setMessages((prev) => [...prev, arrivalMessages])
    }, [arrivalMessages, curremtChat])
    useEffect(() => {
        socket.current.emit("addUser", loginUsers?._id)
        socket.current.on("getUsers", (users) => {
            console.log(users,"on")
        })
    }, [loginUsers])
    const friend = users?.data?.filter(item => item?._id !== loginUsers?._id)
    useEffect(() => {
        const getconversation = async () => {
            try {
                const res = await axios.get(`http://localhost:7050/conversation/${loginUsers?._id}`)
                setConversation(res?.data);
            } catch (err) {
                console.log(err);
            }
        }
        getconversation()
    }, [loginUsers?._id ])
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:7050/messages/${curremtChat?._id}`)
                setMessages(res?.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMessages()
    }, [curremtChat?._id, newMessages])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            senderId: loginUsers._id,
            text: newMessages,
            converssationId: curremtChat._id
        }
        const receverId = curremtChat.member.find(mem => mem !== loginUsers._id)
        socket.current.emit("sendMessage", {
            senderId: loginUsers._id,
            receverId: receverId,
            text: newMessages,
        })
        try {
            const res = await axios.post("http://localhost:7050/messages", message)
            console.log(res?.data, "data");
            setMessages([...messages, res.data])
            setNewMessages("");
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
// console.log(onlineUser, "onlineUser");
    return (
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='Search for Doctors' className='chatMenuInput' />
                    {
                        conversation.map((c) => (
                            <div onClick={() => setCurremtChat(c)}>
                                <Conversation conversation={c}  loginUsers={loginUsers} key={Math.random()} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">

                    {
                        curremtChat ?
                            <>
                                <div className="chatBoxTop">
                                    {



                                        messages.map((m) => (
                                            <div ref={scrollRef}>
                                                <Message message={m} key={Math.random()} own={m?.senderId === loginUsers?._id} user={user} fd={friend} />
                                            </div>
                                        ))
                                    }


                                </div>

                                <div className="chatBoxButtom">
                                    <textarea placeholder='Write Something...'
                                        onChange={(e) => setNewMessages(e?.target?.value)}
                                        value={newMessages}
                                    ></textarea>
                                    <button onClick={handleSubmit}>Send</button>
                                </div>
                            </>
                            : <span className='open-chat'>Open a Conversation</span>
                    }
                </div>

            </div>
            <div className="chat">
                {/* <div className="chatWrapper">
                    {
                        onlineUser?.map((item) => (
                            <ChatOnline key={item._id} user={item} />
                        ))
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Messenger;