import './App.css'
import { useState, useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx'
import PostForm from './components/PostForm/PostForm.jsx'
import PostList from './components/PostList/PostList.jsx'

import postService from './services/postService.js'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await postService.index()
      setPosts(fetchedPosts)
    }
    fetchPosts()
  }, []);

  const handleAddPost = async (postData) => {
    const newPost = await postService.create(postData);
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/posts' element={<PostList posts={posts} />} />
        <Route path='/posts/new' element={<PostForm handleAddPost={handleAddPost} />} />
      </Routes>
    </>
  )
};

export default App
