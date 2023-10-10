import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
  //props 바로 구조분해
  const [post, setPost] = useState({});

  //[before]
  //   const getPost = async () => {
  //     console.log('data fetching ...');
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     setPost(res.data);
  //   };

  //[after]
  const getPost = useCallback(async () => {
    console.log('data fetching ...');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  }, [postId]);

  //useEffect 의존성 배열에 '함수'
  //컴포넌트가 리렌더링 -> 함수 재생성(주소값 변경) -> getPost 재호출
  useEffect(() => {
    getPost();
  }, [getPost]);
  // 주소값이 바뀔 때마다 계속 함수 호출됨
  return (
    <div>
      <h1>UseCallback Ex2</h1>
      {post.id ? post.title : '로딩중 ...'}
    </div>
  );
}
