import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import ChatOnline from '../ChatOnline/ChatOnline';
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import Users from '../Users/Users';
import './Messenger.css';

const Messenger = () => {
  const [users, setUsers] = useState([]);
  const [offlineUser, setOfflineUser] = useState([]);
  const [loginUsers, setLoginUsers] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [newMessages, setNewMessages] = useState('');
  const [curremtChat, setCurremtChat] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();
  // const user = useSelector((state) => state.auth.auth)

  const admin = useSelector((state) => state.admin.admin);
  console.log(admin, 'chat admin');

  // find my Id form db

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://sigma-hospital-server.onrender.com/adminUser/${admin?.adminEmail}`
        );

        setLoginUsers(res.data);

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [admin?.adminEmail]);
  console.log(loginUsers, 'loginUsers');
  useEffect(() => {
    socket.current = io('https://glacial-sea-16602.herokuapp.com/', {
      transports: ['websocket'],
    });
    socket.current.on('getMessage', (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        time: data.time,
      });
    });
  }, []);
  useEffect(() => {
    axios
      .get('https://sigma-hospital-server.onrender.com/adminUsers')
      .then((data) => setUsers(data));
  }, [loginUsers?._id]);
  console.log(users, 'users');
  useEffect(() => {
    arrivalMessages &&
      curremtChat?.member.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages]);
  }, [arrivalMessages, curremtChat]);

  useEffect(() => {
    socket.current.emit('addUser', loginUsers?._id, loginUsers);
    socket.current.on('getUsers', (users) => {
      const friendInfo = users.filter((f) => f?.userId !== loginUsers?._id);
      const friendArray = friendInfo.filter((n) => n?.userInfo !== null);
      setOnlineUser(friendArray);
    });
  }, [loginUsers]);
  useEffect(() => {
    const friend = users?.data?.filter((item) => item?._id !== loginUsers?._id);
    setOfflineUser(friend);
  }, [users.data, loginUsers]);

  useEffect(() => {
    const getconversation = async () => {
      try {
        const res = await axios.get(
          `https://sigma-hospital-server.onrender.com/conversation/${loginUsers?._id}`
        );
        setConversation(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getconversation();
  }, [loginUsers?._id]);
  console.log(curremtChat?._id);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `https://sigma-hospital-server.onrender.com/messages/${curremtChat?._id}`
        );
        setMessages(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [newMessages, curremtChat]);
  console.log(curremtChat, 'curremtChat');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessages !== '' && newMessages !== ' ') {
      const receverId = await curremtChat?.member.find(
        (mem) => mem !== loginUsers?._id
      );
      const message = {
        senderId: loginUsers?._id,
        text: newMessages,
        converssationId: curremtChat?._id,
        time: new Date(),
      };
      socket.current.emit('sendMessage', {
        senderId: loginUsers?._id,
        receverId: receverId,
        text: newMessages,
        time: new Date(),
      });
      try {
        const res = await axios.post(
          'https://sigma-hospital-server.onrender.com/messages',
          message
        );
        setMessages([...messages, res.data]);
        setNewMessages('');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const keyHandle = async (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      //13 is the enter keycode
      //Do stuff in here
      //13 is the enter keycode
      handleSubmit(e);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handelesetMessage = async (reciverId) => {
    const alreadyAdd = conversation?.find(
      (i) =>
        (i.member[0] === reciverId && i.member[1] === loginUsers?._id) ||
        (i.member[1] === reciverId && i.member[0] === loginUsers?._id)
    );
    if (alreadyAdd) {
      setCurremtChat(alreadyAdd);
    } else {
      const data = {
        member: [loginUsers?._id, reciverId],
      };
      try {
        const res = await axios.post(
          'https://sigma-hospital-server.onrender.com/conversation',
          data
        );
        const accc = await axios.get(
          `https://sigma-hospital-server.onrender.com/conversatio/${res?.data?.insertedId}`
        );
        setCurremtChat(accc?.data);
        setConversation([...conversation, accc?.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const reserveConversation = [...conversation].reverse();
  const handleSearchDoctor = async (e) => {
    const value = e.target.value;
    console.log(value);
    const newData = await conversation?.filter((item) => {
      return item?.adminName?.toLowerCase().includes(value.toLowerCase());
    });
    console.log(newData);
    // setConversation(newData)
  };
  console.log(onlineUser, 'onlineUser');
  console.log(curremtChat, 'curremtChat');
  console.log(conversation, 'messages');
  console.log(loginUsers?._id, 'loginUsers?._id');
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input
            type="text"
            onChange={(e) => handleSearchDoctor(e)}
            placeholder="Search for Doctors"
            className="chatMenuInput"
          />
          {reserveConversation.map((c) => (
            <div onClick={() => setCurremtChat(c)}>
              <Conversation
                conversation={c}
                loginUsers={loginUsers}
                key={Math.random()}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {curremtChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message
                      message={m}
                      key={Math.random()}
                      own={m?.senderId === loginUsers?._id}
                      user={admin}
                      fd={loginUsers}
                    />
                  </div>
                ))}
              </div>
              <div className="chatBoxButtom">
                <div className="search">
                  <input
                    placeholder="Write Something..."
                    onChange={(e) => setNewMessages(e?.target?.value)}
                    onKeyPress={keyHandle}
                    value={newMessages}
                    type="text"
                    className="form-control"
                  />{' '}
                  <button onClick={handleSubmit} className="btn btn-primary">
                    <FiSend />
                  </button>{' '}
                </div>

                {/* <textarea placeholder='Write Something...'
                                        onChange={(e) => setNewMessages(e?.target?.value)}
                                        onKeyPress={keyHandle}
                                        value={newMessages}
                                    ></textarea>
                                    <button onClick={handleSubmit}>Send</button> */}
              </div>
            </>
          ) : (
            <span className="open-chat">Open a Conversation</span>
          )}
        </div>
      </div>
      <div className="chat">
        <div className="chatWrapper">
          {onlineUser.length > 0 ? (
            <>
              <hr />
              <span>Online Users</span>
              <hr />
            </>
          ) : null}
          {onlineUser?.map((item) => (
            <div onClick={() => handelesetMessage(item?.userId)}>
              <ChatOnline key={item._id} user={item} />
            </div>
          ))}
          <hr />
          <span>All Users</span>
          <hr />
          {offlineUser?.map((item) => (
            <div onClick={() => handelesetMessage(item?._id)}>
              <Users item={item} key={Math.random()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messenger;
