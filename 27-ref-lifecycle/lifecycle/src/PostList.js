import React from 'react';
import PostItem from './PostItem';

export default function PostList() {
  return (
    <>
      <h1 style={{ textAlign: 'center', background: 'blue', color: 'white' }}>
        PostList
      </h1>
      <PostItem />
    </>
  );
}
