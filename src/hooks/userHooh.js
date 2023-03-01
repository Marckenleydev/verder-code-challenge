import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export function UserData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}`);
      setUser(response.data);
    }
    fetchData();
  }, []);

  return user;
}
export function UserPost(userId) {
    const [userPosts, setUserPosts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`${url}?userId=${userId}`);
        setUserPosts(response.data);
      };
      fetchData();
    }, [userId]);
  
    return userPosts;
  }


