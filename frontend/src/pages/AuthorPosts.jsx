import React, {useState} from 'react'
import {DUMMY_POSTS} from '../assets/data/data.js'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section>
        {posts.length > 0 ? <div className="container posts__container">
            {posts.map(
                ({id, thumbnail, category, title, desc, authorID}) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} 
                category={category} title={title} description={desc} 
                authorID={authorID} 
                />
            )}
        </div> : <h2 className='center'>No posts found</h2>}
    </section>
  )
}

export default AuthorPosts