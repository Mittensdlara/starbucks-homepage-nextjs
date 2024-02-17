'use client'
import NewPost from './NewPost';

import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
  };

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-Blue mb-4">Posts</h1>
      <NewPost addPost={addPost} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-White p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold text-DarkGreen mb-2">{post.title}</h2>
            <p className="text-Gray-600 mb-4">{post.body}</p>
            <p className="text-Sm text-Gray-500">Date of Creation: {post.createdAt}</p>
            <button onClick={() => deletePost(index)} className="bg-Red  font-semibold text-White py-2 px-4 rounded inline-block bg-DarkPink mt-4 hover:bg-DarkRed">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

