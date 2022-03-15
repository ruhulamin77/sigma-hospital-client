import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import ChatOnline from "../ChatOnline/ChatOnline";
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import Users from '../Users/Users';
import './Messenger.css';

const Messenger = () => {
    const [users, setUsers] = useState([])
    const [offlineUser, setOfflineUser] = useState([])
    const [loginUsers, setLoginUsers] = useState(null)
    const [messages, setMessages] = useState([])
    const [arrivalMessages, setArrivalMessages] = useState(null)
    const [newMessages, setNewMessages] = useState("")
    const [curremtChat, setCurremtChat] = useState(null)
    const [conversation, setConversation] = useState([])
    const [onlineUser, setOnlineUser] = useState([])
    const scrollRef = useRef()
    const socket = useRef()
    const user = useSelector((state) => state.auth.value)
    console.log(user, "user");

    // find my Id form db
    useEffect(() => {
        axios.get(`http://localhost:7050/users/${user?.email}`).then(res => setLoginUsers(res.data))
    }, [user?.email])
    console.log(loginUsers, "loginUsers");
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessages({
                sender: data.senderId,
                text: data.text,
                time: data.time,
            })
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:7050/users").then(data => setUsers(data))
    }, [loginUsers?._id])
    console.log(users, "users");
    useEffect(() => {
        arrivalMessages && curremtChat?.member.includes(arrivalMessages.sender) && setMessages((prev) => [...prev, arrivalMessages])
    }, [arrivalMessages, curremtChat])

    useEffect(() => {
        socket.current.emit("addUser", loginUsers?._id, loginUsers)
        socket.current.on("getUsers", (users) => {
            const friendInfo = users.filter((f) => f?.userId !== loginUsers?._id)
            const friendArray = friendInfo.filter(n => n?.userInfo !== null)
            setOnlineUser(friendArray)
        })
    }, [loginUsers])
    useEffect(() => {
        const friend = users?.data?.filter(item => item?._id !== loginUsers?._id)
        setOfflineUser(friend)
    }, [users.data, loginUsers])



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
    }, [loginUsers?._id])
    console.log(curremtChat?._id);
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
    }, [newMessages, curremtChat])
    console.log(curremtChat, "curremtChat");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const receverId = await curremtChat?.member.find(mem => mem !== loginUsers?._id)
        const message = {
            senderId: loginUsers?._id,
            text: newMessages,
            converssationId: curremtChat?._id,
            time: new Date()
        }
        socket.current.emit("sendMessage", {
            senderId: loginUsers?._id,
            receverId: receverId,
            text: newMessages,
            time: new Date()
        })
        try {
            const res = await axios.post("http://localhost:7050/messages", message)
            setMessages([...messages, res.data])
            setNewMessages("");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handelesetMessage = async (reciverId) => {
        const alreadyAdd = conversation?.find(i => (i.member[0] === reciverId && i.member[1] === loginUsers?._id) || (i.member[1] === reciverId && i.member[0] === loginUsers?._id))
        if (alreadyAdd) {
            setCurremtChat(alreadyAdd)
        } else {
            const data = {
                member: [loginUsers?._id, reciverId]
            }
            try {
                const res = await axios.post("http://localhost:7050/conversation", data)
                const accc = await axios.get(`http://localhost:7050/conversatio/${res?.data?.insertedId}`)
                setCurremtChat(accc?.data)
                setConversation([...conversation, accc?.data])
            } catch (err) {
                console.log(err);
            }
        }
    }

    const reserveConversation = [...conversation].reverse()
    console.log(onlineUser, "onlineUser");
    console.log(curremtChat, "curremtChat");
    console.log(messages, "messages");
    console.log(loginUsers?._id, "loginUsers?._id");
    return (
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='Search for Doctors' className='chatMenuInput' />
                    {
                        reserveConversation.map((c) => (
                            <div onClick={() => setCurremtChat(c)}>
                                <Conversation conversation={c} loginUsers={loginUsers} key={Math.random()} />
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
                                                <Message message={m} key={Math.random()} own={m?.senderId === loginUsers?._id} user={user} fd={loginUsers} />
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
                <div className="chatWrapper">
                    {
                        onlineUser.length > 0 ?
                            <>
                                <hr />
                                <span>Online Users</span>
                                <hr />
                            </> : null
                    }
                    {
                        onlineUser?.map((item) => (
                                <ChatOnline key={item._id} user={item} />
                        ))
                    }
                    <hr />
                    <span>All Users</span>
                    <hr />
                    {
                        offlineUser?.map((item) => (
                            <div onClick={() => handelesetMessage(item?._id)} >
                                <Users item={item} key={Math.random()} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Messenger;