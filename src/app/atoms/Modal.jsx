'use client'

import React from 'react'

function Modal({handleSubmit, setIsOpen, setBody,body,title,setTitle}) {
  return (
    <div>
       <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-Black bg-opacity-50">
          <div className="bg-White rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">New Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border border-Green rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Post's Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="border border-Green rounded w-full py-2 px-3"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-Green text-White font-semibold py-2 px-4 rounded inline-block mr-2 hover:bg-DarkGreen"
              >
                Submit
              </button>
              <button
              type='button'
                onClick={() => setIsOpen(false)}
                className="bg-DarkPink text-White font-semibold py-2 px-4 rounded inline-block fixed hover:bg-Pink"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Modal
