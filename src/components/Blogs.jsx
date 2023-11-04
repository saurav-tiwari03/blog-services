import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'

export const Blogs = () => {
    const  {posts, loading} = useContext(AppContext);

    return (
        <div className='w-10/12 max-w-[600px] mt-16 mb-14 h-full flex flex-col justify-center items-center' >
            {loading ? (
                <Spinner />
            ) : (
                posts.length === 0 ? 
                (
                    <div>
                        <p>No post found</p>
                    </div>
                ) : 
                (
                    posts.map((post) => (
                        <div key={post.id}>
                            <p className='text-md font-bold'>{post.title}</p>
                            <p>By <span>{post.author}</span> on {post.category}</p>
                            <p>Posted on <span>{post.date}</span></p>
                            <p>{post.content}</p>
                            <div>
                                {post.tags.map((tag,index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    ))
                )
            )}
        </div>
    )
}
