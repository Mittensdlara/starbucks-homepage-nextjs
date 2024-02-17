"use client";
import Modal from "../atoms/Modal";
import { useState } from "react";

const NewPost = ({ addPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      createdAt: new Date().toLocaleString(), 
    };
    addPost(newPost);
    setIsOpen(false);
    setTitle("");
    setBody("");
    // Save posts in local storage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-Green text-White font-semibold py-2 px-4 rounded inline-block mt-4 hover:bg-DarkGreen"
      >
        Make a New Post
      </button>
      {isOpen && (
        <Modal handleSubmit={handleSubmit} setBody={setBody} body={body} title={title} setTitle={setTitle} setIsOpen={setIsOpen}/>
      )}
    </div>
  );
};

export default NewPost;
