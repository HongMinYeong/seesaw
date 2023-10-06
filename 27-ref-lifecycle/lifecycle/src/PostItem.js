import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostItem() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setTimeout(() => {
      getPost();
    }, 2000);
  }, []);
  const getPost = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
  };
  return (
    <div>
      <div>
        {posts ? (
          posts.map((post) => (
            <div
              style={{ textAlign: 'center', background: 'skyblue' }}
              key={post.id}
            >
              <div>
                No.{post.id}-{post.title}
              </div>
              <br />
              <div>{post.body}</div>
              <hr />
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center' }}> Loading...</div>
        )}
      </div>
    </div>
  );
}
