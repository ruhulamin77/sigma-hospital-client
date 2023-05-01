import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetBlogQuery } from '../features/blogApi';

const useBlog = () => {
  const [loginUser, setLoginUser] = useState(null);
  const [singleBlog, setSingleBlog] = useState([]);
  const [liked, setLiked] = useState([]);
  const [newData, setNewData] = useState([]);
  const [newHelp, setNewHelp] = useState([]);
  const [search, setSearch] = useState('');
  const [number, setNumber] = useState(Number);

  const blogInfo = useGetBlogQuery();
  const user = useSelector((state) => state.auth.auth);
  // find loginn user form db
  useEffect(() => {
    axios
      .get(`https://sigma-hospital-server.onrender.com/users/${user?.email}`)
      .then((res) => setLoginUser(res.data));
  }, [user?.email]);

  useEffect(() => {
    const foundDoctor = blogInfo?.data?.find((doctors) => doctors?._id === id);
    setSingleBlog(foundDoctor);
    setNumber(singleBlog?.likes?.length);
    if (foundDoctor?.likes?.length === 0) {
      setLiked(false);
    } else {
      foundDoctor?.likes?.includes(loginUser?._id)
        ? setLiked(true)
        : setLiked(false);
    }
  }, [blogInfo?.data, id, loginUser?._id, singleBlog]);

  return {};
};

export default useBlog;
